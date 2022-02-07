# Code via https://twitter.com/quite_grey/status/1415229566537420803

library(zoo)
library(tidyverse)

#data ----
tuesdata <- tidytuesdayR::tt_load(2021, week = 29)
scooby <- tuesdata$scoobydoo
 
#tidy
df <- scooby %>%
  select(index, date_aired, starts_with("caught"), starts_with("captured"), -caught_other, -caught_not) %>%
  pivot_longer(c(caught_fred:captured_scooby), names_to = "var", values_to = "value") %>%
  separate(var, c("var", "character")) %>%
  mutate(value = case_when(
    var == "caught" & value == "TRUE" ~ 1,
    var == "captured" & value == "TRUE" ~ -1,
    TRUE ~ 0
  )
  ) %>%
  group_by(character, index) %>%
  summarise(value = sum(value, na.rm = TRUE)) %>%
  group_by(character) %>%
  mutate(cumul_value = cumsum(value),
         roll_value = rollapply(value, 50, sum, fill = "left", align = "right", partial = TRUE)) %>%
  ungroup() %>%
  mutate(character = fct_recode(character, `Scooby Doo` = "scooby", `Fred Jones` = "fred", `Shaggy Rogers` = "shaggy", `Velma Dinkley` = "velma", `Daphne Blake` = "daphnie") %>%
           factor(., levels = c("Scooby Doo", "Fred Jones", "Shaggy Rogers", "Velma Dinkley", "Daphne Blake")))

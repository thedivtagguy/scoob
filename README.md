# Scooby Doo DataViz - A3 Assignment
Live URL: [ScoobyDoo](https://scoobydooviz.netlify.app)
Dataset via [tidytuesday](https://github.com/rfordatascience/tidytuesday/tree/master/data/2021/2021-07-13)

### Data Dictionary

# `scoobydoo.csv`

|variable                 |class     |description              |
|:------------------------|:---------|:------------------------|
|index                    |double    | Index ordering based on Scoobypedia |
|series_name              |character |Name of the series in which the episode takes place or in movies' cases the Scoobypedia's grouping classification |
|network                  |character |Network the TV series takes place in, if it is a movie will use similar grouping as series.name variable |
|season                   |character |Season of TV Series, if not TV Series will default to the format                   |
|title                    |character |Title of Episode/Movie                    |
|imdb                     |character | Score on IMDB (NULL if recently aired) |
|engagement               |character | Number of reviews on IMDB (NULL if very recently aired) |
|date_aired               |double    |Dated aired in US               |
|run_time                 |double    | Run time in min                 |
|format                   |character | Type of media                    |
|monster_name             |character |Name of monster              |
|monster_gender           |character |Binary monster gender            |
|monster_type             |character |Monster type              |
|monster_subtype          |character | Monster subtype           |
|monster_species          |character |monster_species          |
|monster_real             |character | Was monster real             |
|monster_amount           |double    | Monster amount            |
|caught_fred              |character | Caught by Fred              |
|caught_daphnie           |character |caught by Daphnie           |
|caught_velma             |character |caught by Velma             |
|caught_shaggy            |character |caught by Shaggy            |
|caught_scooby            |character |caught by Scooby            |
|captured_fred            |character |captured Fred            |
|captured_daphnie         |character |captured Daphnie         |
|captured_velma           |character |captured Velma           |
|captured_shaggy          |character |captured Shaggy          |
|captured_scooby          |character |captured Scooby          |
|unmask_fred              |character |unmask by fred              |
|unmask_daphnie           |character |unmask by Daphnie           |
|unmask_velma             |character |unmask by Velma             |
|unmask_shaggy            |character |unmask by Shaggy            |
|unmask_scooby            |character |unmask by Scooby            |
|snack_fred               |character |snack eaten by Fred               |
|snack_daphnie            |character |snack  eaten by Daphnie            |
|snack_velma              |character |snack  eaten by Velma              |
|snack_shaggy             |character |snack  eaten by Shaggy             |
|snack_scooby             |character |snack  eaten by Scooby             |
|unmask_other             |logical   |unmask by other             |
|caught_other             |logical   |caught by other             |
|caught_not               |logical   | Not caught               |
|trap_work_first          |character | Trap work first          |
|setting_terrain          |character | Setting type of terrain          |
|setting_country_state    |character |setting country state    |
|suspects_amount          |double    |suspects amount          |
|non_suspect              |character |non suspect              |
|arrested                 |character |arrested                 |
|culprit_name             |character |culprit name             |
|culprit_gender           |character |culprit binary gender           |
|culprit_amount           |double    |culprit amount           |
|motive                   |character |motive                   |
|if_it_wasnt_for          |character | Phrase at the end of show, ie "if it wasnt for ..."          |
|and_that                 |character |and that                 |
|door_gag                 |logical   |door gag                 |
|number_of_snacks         |character |number of snacks         |
|split_up                 |character |split up                 |
|another_mystery          |character |another mystery          |
|set_a_trap               |character |set a trap               |
|jeepers                  |character |Times "jeepers" said                  |
|jinkies                  |character | Times "jinkies" said                  |
|my_glasses               |character |Times "my glasses" said               |
|just_about_wrapped_up    |character | Times "just about wrapped up" said    |
|zoinks                   |character | Times "zoinks"said  |
|groovy                   |character |Times "groovy" said                   |
|scooby_doo_where_are_you |character |Times "scooby doo where are you" said |
|rooby_rooby_roo          |character | Times "rooby_rooby_roo" said          |
|batman                   |logical   |batman in episode                   |
|scooby_dum               |logical   | scooby_dum in episode               |
|scrappy_doo              |logical   |scrappy_doo in episode              |
|hex_girls                |logical   |hex_girls in episode                 |
|blue_falcon              |logical   |blue_falcon in episode              |
|fred_va                  |character |Fred voice actor                  |
|daphnie_va               |character |Daphnie voice actor               |
|velma_va                 |character |velma voice actor                 |
|shaggy_va                |character |shaggy  voice actor                |
|scooby_va                |character |scooby  voice actor                |
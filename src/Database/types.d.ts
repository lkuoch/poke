import type { SliceCaseReducers, CaseReducer, PayloadAction } from "@reduxjs/toolkit";

export namespace State {
  export interface IState {
    abilities: Schema.abilities;
    ability_changelog: Schema.ability_changelog;
    ability_changelog_prose: Schema.ability_changelog_prose;
    ability_flavor_text: Schema.ability_flavor_text;
    ability_names: Schema.ability_names;
    ability_prose: Schema.ability_prose;
    berries: Schema.berries;
    berry_firmness: Schema.berry_firmness;
    berry_firmness_names: Schema.berry_firmness_names;
    berry_flavors: Schema.berry_flavors;
    characteristic_text: Schema.characteristic_text;
    characteristics: Schema.characteristics;
    contest_combos: Schema.contest_combos;
    contest_effect_prose: Schema.contest_effect_prose;
    contest_effects: Schema.contest_effects;
    contest_type_names: Schema.contest_type_names;
    contest_types: Schema.contest_types;
    egg_group_prose: Schema.egg_group_prose;
    egg_groups: Schema.egg_groups;
    encounter_condition_prose: Schema.encounter_condition_prose;
    encounter_condition_value_map: Schema.encounter_condition_value_map;
    encounter_condition_value_prose: Schema.encounter_condition_value_prose;
    encounter_condition_values: Schema.encounter_condition_values;
    encounter_conditions: Schema.encounter_conditions;
    encounter_method_prose: Schema.encounter_method_prose;
    encounter_methods: Schema.encounter_methods;
    encounter_slots: Schema.encounter_slots;
    encounters: Schema.encounters;
    evolution_chains: Schema.evolution_chains;
    evolution_trigger_prose: Schema.evolution_trigger_prose;
    evolution_triggers: Schema.evolution_triggers;
    experience: Schema.experience;
    genders: Schema.genders;
    generation_names: Schema.generation_names;
    generations: Schema.generations;
    growth_rate_prose: Schema.growth_rate_prose;
    growth_rates: Schema.growth_rates;
    item_categories: Schema.item_categories;
    item_category_prose: Schema.item_category_prose;
    item_flag_map: Schema.item_flag_map;
    item_flag_prose: Schema.item_flag_prose;
    item_flags: Schema.item_flags;
    item_flavor_summaries: Schema.item_flavor_summaries;
    item_flavor_text: Schema.item_flavor_text;
    item_fling_effect_prose: Schema.item_fling_effect_prose;
    item_game_indices: Schema.item_game_indices;
    item_names: Schema.item_names;
    item_pocket_names: Schema.item_pocket_names;
    item_pockets: Schema.item_pockets;
    item_prose: Schema.item_prose;
    items: Schema.items;
    language_names: Schema.language_names;
    languages: Schema.languages;
    location_area_encounter_rates: Schema.location_area_encounter_rates;
    location_area_prose: Schema.location_area_prose;
    location_areas: Schema.location_areas;
    location_game_indices: Schema.location_game_indices;
    location_names: Schema.location_names;
    locations: Schema.locations;
    machines: Schema.machines;
    move_battle_style_prose: Schema.move_battle_style_prose;
    move_battle_styles: Schema.move_battle_styles;
    move_changelog: Schema.move_changelog;
    move_damage_class_prose: Schema.move_damage_class_prose;
    move_damage_classes: Schema.move_damage_classes;
    move_effect_changelog: Schema.move_effect_changelog;
    move_effect_changelog_prose: Schema.move_effect_changelog_prose;
    move_effect_prose: Schema.move_effect_prose;
    move_flag_map: Schema.move_flag_map;
    move_flag_prose: Schema.move_flag_prose;
    move_flags: Schema.move_flags;
    move_flavor_summaries: Schema.move_flavor_summaries;
    move_flavor_text: Schema.move_flavor_text;
    move_meta: Schema.move_meta;
    move_meta_ailment_names: Schema.move_meta_ailment_names;
    move_meta_ailments: Schema.move_meta_ailments;
    move_meta_categories: Schema.move_meta_categories;
    move_meta_category_prose: Schema.move_meta_category_prose;
    move_meta_stat_changes: Schema.move_meta_stat_changes;
    move_names: Schema.move_names;
    move_target_prose: Schema.move_target_prose;
    move_targets: Schema.move_targets;
    moves: Schema.moves;
    nature_battle_style_preferences: Schema.nature_battle_style_preferences;
    nature_names: Schema.nature_names;
    nature_pokeathlon_stats: Schema.nature_pokeathlon_stats;
    natures: Schema.natures;
    pal_park: Schema.pal_park;
    pal_park_area_names: Schema.pal_park_area_names;
    pal_park_areas: Schema.pal_park_areas;
    pokeathlon_stat_names: Schema.pokeathlon_stat_names;
    pokeathlon_stats: Schema.pokeathlon_stats;
    pokedex_prose: Schema.pokedex_prose;
    pokedex_version_groups: Schema.pokedex_version_groups;
    pokedexes: Schema.pokedexes;
    pokemon: Schema.pokemon;
    pokemon_abilities: Schema.pokemon_abilities;
    pokemon_color_names: Schema.pokemon_color_names;
    pokemon_colors: Schema.pokemon_colors;
    pokemon_dex_numbers: Schema.pokemon_dex_numbers;
    pokemon_egg_groups: Schema.pokemon_egg_groups;
    pokemon_evolution: Schema.pokemon_evolution;
    pokemon_form_generations: Schema.pokemon_form_generations;
    pokemon_form_names: Schema.pokemon_form_names;
    pokemon_form_pokeathlon_stats: Schema.pokemon_form_pokeathlon_stats;
    pokemon_forms: Schema.pokemon_forms;
    pokemon_game_indices: Schema.pokemon_game_indices;
    pokemon_habitat_names: Schema.pokemon_habitat_names;
    pokemon_habitats: Schema.pokemon_habitats;
    pokemon_items: Schema.pokemon_items;
    pokemon_move_method_prose: Schema.pokemon_move_method_prose;
    pokemon_move_methods: Schema.pokemon_move_methods;
    pokemon_shape_prose: Schema.pokemon_shape_prose;
    pokemon_shapes: Schema.pokemon_shapes;
    pokemon_species: Schema.pokemon_species;
    pokemon_species_flavor_summaries: Schema.pokemon_species_flavor_summaries;
    pokemon_species_flavor_text: Schema.pokemon_species_flavor_text;
    pokemon_species_names: Schema.pokemon_species_names;
    pokemon_stats: Schema.pokemon_stats;
    pokemon_types: Schema.pokemon_types;
    region_names: Schema.region_names;
    regions: Schema.regions;
    stat_names: Schema.stat_names;
    stats: Schema.stats;
    super_contest_combos: Schema.super_contest_combos;
    super_contest_effect_prose: Schema.super_contest_effect_prose;
    super_contest_effects: Schema.super_contest_effects;
    type_efficacy: Schema.type_efficacy;
    type_game_indices: Schema.type_game_indices;
    type_names: Schema.type_names;
    types: Schema.types;
    version_group_pokemon_move_methods: Schema.version_group_pokemon_move_methods;
    version_group_regions: Schema.version_group_regions;
    version_groups: Schema.version_groups;
    version_names: Schema.version_names;
    versions: Schema.versions;
  }
}

export namespace Redux {
  export interface IActions extends SliceCaseReducers<State.IState> {}

  export interface IDispatch {}

  export interface IMappedDispatch extends Partial<IDispatch> {}

  export type IMappedProps = State.IMappedState & IMappedDispatch;
}

export namespace Schema {
  export interface Abilities {
    identifier: { [key: string]: string };
    generation_id: { [key: string]: number };
    is_main_series: { [key: string]: number };
  }
  export interface ability_changelog {
    ability_id: { [key: string]: number };
    changed_in_version_group_id: { [key: string]: number };
  }

  export interface ability_changelog_prose {
    local_language_id: { [key: string]: number };
    effect: { [key: string]: string };
  }

  export interface ability_flavor_string {
    ability_id: { [key: string]: number };
    flavor_string: { [key: string]: string };
    language_id: { [key: string]: number };
    version_group_id: { [key: string]: number };
  }

  export interface ability_names {
    local_language_id: { [key: string]: number };
    name: { [key: string]: string };
  }

  export interface ability_prose {
    effect: { [key: string]: string };
    local_language_id: { [key: string]: number };
    short_effect: { [key: string]: string };
  }

  export interface berries {
    firmness_id: { [key: string]: number };
    growth_time: { [key: string]: number };
    item_id: { [key: string]: number };
    max_harvest: { [key: string]: number };
    natural_gift_power: { [key: string]: number };
    natural_gift_type_id: { [key: string]: number };
    size: { [key: string]: number };
    smoothness: { [key: string]: number };
    soil_dryness: { [key: string]: number };
  }

  export interface berry_firmness {
    identifier: { [key: string]: string };
  }

  export interface berry_firmness_names {
    local_language_id: { [key: string]: number };
    name: { [key: string]: string };
  }

  export interface berry_flavors {
    contest_type_id: { [key: string]: number };
    flavor: { [key: string]: number };
  }

  export interface characteristic_string {
    characteristic_id: { [key: string]: number };
    local_language_id: { [key: string]: number };
    message: { [key: string]: string };
  }

  export interface characteristics {
    gene_mod_5: { [key: string]: number };
    stat_id: { [key: string]: number };
  }

  export interface contest_combos {
    second_move_id: { [key: string]: number };
  }

  export interface contest_effect_prose {
    local_language_id: { [key: string]: number };
    flavor_text: { [key: string]: string };
    effect: { [key: string]: string };
  }

  export interface contest_effects {
    appeal: { [key: string]: number };
    jam: { [key: string]: number };
  }

  export interface contest_type_names {
    color: { [key: string]: string };
    flavor: { [key: string]: string };
    local_language_id: { [key: string]: number };
    name: { [key: string]: string };
  }

  export interface contest_types {
    identifier: { [key: string]: string };
  }

  export interface egg_group_prose {
    local_language_id: { [key: string]: number };
    name: { [key: string]: string };
  }

  export interface egg_groups {
    identifier: { [key: string]: string };
  }

  export interface encounter_condition_prose {
    local_language_id: { [key: string]: number };
    name: { [key: string]: string };
  }

  export interface encounter_condition_value_map {
    encounter_condition_value_id: { [key: string]: number };
  }

  export interface encounter_condition_value_prose {
    local_language_id: { [key: string]: number };
    name: { [key: string]: string };
  }

  export interface encounter_condition_values {
    encounter_condition_id: { [key: string]: number };
    identifier: { [key: string]: string };
    is_default: { [key: string]: number };
  }

  export interface encounter_conditions {
    identifier: { [key: string]: string };
  }

  export interface encounter_method_prose {
    local_language_id: { [key: string]: number };
    name: { [key: string]: string };
  }

  export interface encounter_methods {
    identifier: { [key: string]: string };
    order: { [key: string]: number };
  }

  export interface encounter_slots {
    version_group_id: { [key: string]: number };
    encounter_method_id: { [key: string]: number };
    slot: { [key: string]: number | string };
    rarity: { [key: string]: number };
  }

  export interface encounters {
    encounter_slot_id: { [key: string]: number };
    location_area_id: { [key: string]: number };
    max_level: { [key: string]: number };
    min_level: { [key: string]: number };
    pokemon_id: { [key: string]: number };
    version_id: { [key: string]: number };
  }

  export interface evolution_chains {
    baby_trigger_item_id: { [key: string]: number | string };
  }

  export interface evolution_trigger_prose {
    local_language_id: { [key: string]: number };
    name: { [key: string]: string };
  }

  export interface evolution_triggers {
    identifier: { [key: string]: string };
  }

  export interface experience {
    experience: { [key: string]: number };
    level: { [key: string]: number };
  }

  export interface genders {
    identifier: { [key: string]: string };
  }

  export interface generation_names {
    local_language_id: { [key: string]: number };
    name: { [key: string]: string };
  }

  export interface generations {
    identifier: { [key: string]: string };
    main_region_id: { [key: string]: number };
  }

  export interface growth_rate_prose {
    local_language_id: { [key: string]: number };
    name: { [key: string]: string };
  }

  export interface growth_rates {
    formula: { [key: string]: string };
    identifier: { [key: string]: string };
  }

  export interface item_categories {
    identifier: { [key: string]: string };
    pocket_id: { [key: string]: number };
  }

  export interface item_category_prose {
    local_language_id: { [key: string]: number };
    name: { [key: string]: string };
  }

  export interface item_flag_map {
    item_flag_id: { [key: string]: number };
  }

  export interface item_flag_prose {
    description: { [key: string]: string };
    local_language_id: { [key: string]: number };
    name: { [key: string]: string };
  }

  export interface item_flags {
    identifier: { [key: string]: string };
  }

  export interface item_flavor_string {
    flavor_string: { [key: string]: string };
    item_id: { [key: string]: number };
    language_id: { [key: string]: number };
    version_group_id: { [key: string]: number };
  }

  export interface item_flavor_summaries {
    flavor_summary: { [key: string]: string };
    local_language_id: { [key: string]: number };
  }

  export interface item_fling_effect_prose {
    effect: { [key: string]: string };
    local_language_id: { [key: string]: number };
  }

  export interface item_game_indices {
    game_index: { [key: string]: number };
    generation_id: { [key: string]: number };
  }

  export interface item_names {
    local_language_id: { [key: string]: number };
    name: { [key: string]: string };
  }

  export interface item_pocket_names {
    local_language_id: { [key: string]: number };
    name: { [key: string]: string };
  }

  export interface item_pockets {
    identifier: { [key: string]: string };
  }

  export interface item_prose {
    effect: { [key: string]: string };
    local_language_id: { [key: string]: number };
    short_effect: { [key: string]: string };
  }

  export interface items {
    category_id: { [key: string]: number };
    cost: { [key: string]: number };
    fling_effect_id: { [key: string]: number | string };
    fling_power: { [key: string]: number | string };
    identifier: { [key: string]: string };
  }

  export interface language_names {
    local_language_id: { [key: string]: number };
    name: { [key: string]: string };
  }

  export interface languages {
    identifier: { [key: string]: string };
    iso3166: { [key: string]: string };
    iso639: { [key: string]: string };
    official: { [key: string]: number | string };
    order: { [key: string]: number };
  }

  export interface location_area_encounter_rates {
    encounter_method_id: { [key: string]: number };
    rate: { [key: string]: number };
    version_id: { [key: string]: number };
  }

  export interface location_area_prose {
    local_language_id: { [key: string]: number };
    name: { [key: string]: string };
  }

  export interface location_areas {
    game_index: { [key: string]: number };
    identifier: { [key: string]: string };
    location_id: { [key: string]: number };
  }

  export interface location_game_indices {
    game_index: { [key: string]: number };
    generation_id: { [key: string]: number };
  }

  export interface location_names {
    local_language_id: { [key: string]: number };
    name: { [key: string]: string };
  }

  export interface locations {
    identifier: { [key: string]: string };
    region_id: { [key: string]: number | string };
  }

  export interface machines {
    item_id: { [key: string]: number };
    move_id: { [key: string]: number };
    version_group_id: { [key: string]: number };
  }

  export interface move_battle_style_prose {
    local_language_id: { [key: string]: number };
    name: { [key: string]: string };
  }

  export interface move_battle_styles {
    identifier: { [key: string]: string };
  }

  export interface move_changelog {
    accuracy: { [key: string]: number | string };
    changed_in_version_group_id: { [key: string]: number };
    effect_chance: { [key: string]: number | string };
    effect_id: { [key: string]: number | string };
    power: { [key: string]: number | string };
    pp: { [key: string]: number | string };
    priority: { [key: string]: number | string };
    target_id: { [key: string]: number | string };
    type_id: { [key: string]: number | string };
  }

  export interface move_damage_class_prose {
    description: { [key: string]: string };
    local_language_id: { [key: string]: number };
    name: { [key: string]: string };
  }

  export interface move_damage_classes {
    identifier: { [key: string]: string };
  }

  export interface move_effect_changelog {
    changed_in_version_group_id: { [key: string]: number };
    effect_id: { [key: string]: number };
  }

  export interface move_effect_changelog_prose {
    effect: { [key: string]: string };
    local_language_id: { [key: string]: number };
  }

  export interface move_effect_prose {
    effect: { [key: string]: string };
    local_language_id: { [key: string]: number };
    short_effect: { [key: string]: string };
  }

  export interface move_flag_map {
    move_flag_id: { [key: string]: number };
  }

  export interface move_flag_prose {
    description: { [key: string]: string };
    local_language_id: { [key: string]: number };
    name: { [key: string]: string };
  }

  export interface move_flags {
    identifier: { [key: string]: string };
  }

  export interface move_flavor_string {
    flavor_string: { [key: string]: string };
    language_id: { [key: string]: number };
    move_id: { [key: string]: number };
    version_group_id: { [key: string]: number };
  }

  export interface move_flavor_summaries {
    flavor_summary: { [key: string]: string };
    local_language_id: { [key: string]: number };
  }

  export interface move_meta {
    ailment_chance: { [key: string]: number };
    crit_rate: { [key: string]: number };
    drain: { [key: string]: number };
    flinch_chance: { [key: string]: number };
    healing: { [key: string]: number };
    max_hits: { [key: string]: number | string };
    max_turns: { [key: string]: number | string };
    meta_ailment_id: { [key: string]: number };
    meta_category_id: { [key: string]: number };
    min_hits: { [key: string]: number | string };
    min_turns: { [key: string]: number | string };
    stat_chance: { [key: string]: number };
  }

  export interface move_meta_ailment_names {
    local_language_id: { [key: string]: number };
    name: { [key: string]: string };
  }

  export interface move_meta_ailments {
    identifier: { [key: string]: string };
  }

  export interface move_meta_categories {
    identifier: { [key: string]: string };
  }

  export interface move_meta_category_prose {
    description: { [key: string]: string };
    local_language_id: { [key: string]: number };
  }

  export interface move_meta_stat_changes {
    change: { [key: string]: number };
    stat_id: { [key: string]: number };
  }

  export interface move_names {
    local_language_id: { [key: string]: number };
    name: { [key: string]: string };
  }

  export interface move_target_prose {
    description: { [key: string]: string };
    local_language_id: { [key: string]: number };
    name: { [key: string]: string };
  }

  export interface move_targets {
    identifier: { [key: string]: string };
  }

  export interface moves {
    accuracy: { [key: string]: number | string };
    contest_effect_id: { [key: string]: number | string };
    contest_type_id: { [key: string]: number | string };
    damage_class_id: { [key: string]: number };
    effect_chance: { [key: string]: number | string };
    effect_id: { [key: string]: number };
    generation_id: { [key: string]: number };
    identifier: { [key: string]: string };
    power: { [key: string]: number | string };
    pp: { [key: string]: number | string };
    priority: { [key: string]: number };
    super_contest_effect_id: { [key: string]: number | string };
    target_id: { [key: string]: number };
    type_id: { [key: string]: number };
  }

  export interface nature_battle_style_preferences {
    high_hp_preference: { [key: string]: number };
    low_hp_preference: { [key: string]: number };
    move_battle_style_id: { [key: string]: number };
  }

  export interface nature_names {
    local_language_id: { [key: string]: number };
    name: { [key: string]: string };
  }

  export interface nature_pokeathlon_stats {
    max_change: { [key: string]: number };
    pokeathlon_stat_id: { [key: string]: number };
  }

  export interface natures {
    decreased_stat_id: { [key: string]: number };
    game_index: { [key: string]: number };
    hates_flavor_id: { [key: string]: number };
    identifier: { [key: string]: string };
    increased_stat_id: { [key: string]: number };
    likes_flavor_id: { [key: string]: number };
  }

  export interface pal_park {
    area_id: { [key: string]: number };
    base_score: { [key: string]: number };
    rate: { [key: string]: number };
  }

  export interface pal_park_area_names {
    local_language_id: { [key: string]: number };
    name: { [key: string]: string };
  }

  export interface pal_park_areas {
    identifier: { [key: string]: string };
  }

  export interface pokeathlon_stat_names {
    local_language_id: { [key: string]: number };
    name: { [key: string]: string };
  }

  export interface pokeathlon_stats {
    identifier: { [key: string]: string };
  }

  export interface pokedex_prose {
    description: { [key: string]: string };
    local_language_id: { [key: string]: number };
    name: { [key: string]: string };
  }

  export interface pokedex_version_groups {
    version_group_id: { [key: string]: number };
  }

  export interface pokedexes {
    identifier: { [key: string]: string };
    is_main_series: { [key: string]: number | string };
    region_id: { [key: string]: number | string };
  }

  export interface pokemon {
    base_experience: { [key: string]: number };
    height: { [key: string]: number };
    identifier: { [key: string]: string };
    is_default: { [key: string]: number | string };
    order: { [key: string]: number };
    species_id: { [key: string]: number };
    weight: { [key: string]: number };
  }

  export interface pokemon_abilities {
    ability_id: { [key: string]: number };
    is_hidden: { [key: string]: number | string };
    slot: { [key: string]: number };
  }

  export interface pokemon_color_names {
    local_language_id: { [key: string]: number };
    name: { [key: string]: string };
  }

  export interface pokemon_colors {
    identifier: { [key: string]: string };
  }

  export interface pokemon_dex_numbers {
    pokedex_id: { [key: string]: number };
    pokedex_number: { [key: string]: number };
  }

  export interface pokemon_egg_groups {
    egg_group_id: { [key: string]: number };
  }

  export interface pokemon_evolution {
    evolution_trigger_id: { [key: string]: number };
    evolved_species_id: { [key: string]: number };
    gender_id: { [key: string]: number | string };
    held_item_id: { [key: string]: number | string };
    known_move_id: { [key: string]: number | string };
    known_move_type_id: { [key: string]: number | string };
    location_id: { [key: string]: number | string };
    minimum_affection: { [key: string]: number | string };
    minimum_beauty: { [key: string]: number | string };
    minimum_happiness: { [key: string]: number | string };
    minimum_level: { [key: string]: number | string };
    needs_overworld_rain: { [key: string]: number | string };
    party_species_id: { [key: string]: number | string };
    party_type_id: { [key: string]: number | string };
    relative_physical_stats: { [key: string]: number | string };
    time_of_day: { [key: string]: string };
    trade_species_id: { [key: string]: number | string };
    trigger_item_id: { [key: string]: number | string };
    turn_upside_down: { [key: string]: number | string };
  }

  export interface pokemon_form_generations {
    game_index: { [key: string]: number };
    generation_id: { [key: string]: number };
  }

  export interface pokemon_form_names {
    form_name: { [key: string]: string };
    local_language_id: { [key: string]: number };
    pokemon_name: { [key: string]: string };
  }

  export interface pokemon_form_pokeathlon_stats {
    base_stat: { [key: string]: number };
    maximum_stat: { [key: string]: number };
    minimum_stat: { [key: string]: number };
    pokeathlon_stat_id: { [key: string]: number };
  }

  export interface pokemon_forms {
    form_identifier: { [key: string]: string };
    form_order: { [key: string]: number };
    identifier: { [key: string]: string };
    introduced_in_version_group_id: { [key: string]: number };
    is_battle_only: { [key: string]: number | string };
    is_default: { [key: string]: number | string };
    is_mega: { [key: string]: number | string };
    order: { [key: string]: number };
    pokemon_id: { [key: string]: number };
  }

  export interface pokemon_game_indices {
    game_index: { [key: string]: number };
    version_id: { [key: string]: number };
  }

  export interface pokemon_habitat_names {
    local_language_id: { [key: string]: number };
    name: { [key: string]: string };
  }

  export interface pokemon_habitats {
    identifier: { [key: string]: string };
  }

  export interface pokemon_items {
    item_id: { [key: string]: number };
    rarity: { [key: string]: number };
    version_id: { [key: string]: number };
  }

  export interface pokemon_move_method_prose {
    description: { [key: string]: string };
    local_language_id: { [key: string]: number };
    name: { [key: string]: string };
  }

  export interface pokemon_move_methods {
    identifier: { [key: string]: string };
  }

  export interface pokemon_moves {
    level: { [key: string]: number };
    move_id: { [key: string]: number };
    order: { [key: string]: number };
    pokemon_id: { [key: string]: number };
    pokemon_move_method_id: { [key: string]: number };
    version_group_id: { [key: string]: number };
  }

  export interface pokemon_shape_prose {
    awesome_name: { [key: string]: string };
    description: { [key: string]: string };
    local_language_id: { [key: string]: number };
    name: { [key: string]: string };
  }

  export interface pokemon_shapes {
    identifier: { [key: string]: string };
  }

  export interface pokemon_species {
    base_happiness: { [key: string]: number };
    capture_rate: { [key: string]: number };
    color_id: { [key: string]: number };
    conquest_order: { [key: string]: number | string };
    evolution_chain_id: { [key: string]: number };
    evolves_from_species_id: { [key: string]: number | string };
    forms_switchable: { [key: string]: number | string };
    gender_rate: { [key: string]: number };
    generation_id: { [key: string]: number };
    growth_rate_id: { [key: string]: number };
    habitat_id: { [key: string]: number | string };
    has_gender_differences: { [key: string]: number | string };
    hatch_counter: { [key: string]: number };
    identifier: { [key: string]: string };
    is_baby: { [key: string]: number | string };
    order: { [key: string]: number };
    shape_id: { [key: string]: number };
  }

  export interface pokemon_species_flavor_string {
    flavor_string: { [key: string]: string };
    language_id: { [key: string]: number };
    species_id: { [key: string]: number };
    version_id: { [key: string]: number };
  }

  export interface pokemon_species_flavor_summaries {
    flavor_summary: { [key: string]: string };
    local_language_id: { [key: string]: number };
  }

  export interface pokemon_species_names {
    genus: { [key: string]: string };
    local_language_id: { [key: string]: number };
    name: { [key: string]: string };
  }

  export interface pokemon_stats {
    base_stat: { [key: string]: number };
    effort: { [key: string]: number };
    stat_id: { [key: string]: number };
  }

  export interface pokemon_types {
    slot: { [key: string]: number };
    type_id: { [key: string]: number };
  }

  export interface region_names {
    local_language_id: { [key: string]: number };
    name: { [key: string]: string };
  }

  export interface regions {
    identifier: { [key: string]: string };
  }

  export interface stat_names {
    local_language_id: { [key: string]: number };
    name: { [key: string]: string };
  }

  export interface stats {
    damage_class_id: { [key: string]: number | string };
    game_index: { [key: string]: number | string };
    identifier: { [key: string]: string };
    is_battle_only: { [key: string]: number | string };
  }

  export interface super_contest_combos {
    second_move_id: { [key: string]: number };
  }

  export interface super_contest_effect_prose {
    local_language_id: { [key: string]: number };
    flavor_text: { [key: string]: string };
  }

  export interface super_contest_effects {
    appeal: { [key: string]: number };
  }

  export interface type_efficacy {
    damage_factor: { [key: string]: number };
    target_type_id: { [key: string]: number };
  }

  export interface type_game_indices {
    game_index: { [key: string]: number };
    generation_id: { [key: string]: number };
  }

  export interface type_names {
    local_language_id: { [key: string]: number };
    name: { [key: string]: string };
  }

  export interface types {
    damage_class_id: { [key: string]: number | string };
    generation_id: { [key: string]: number };
    identifier: { [key: string]: string };
  }

  export interface version_group_pokemon_move_methods {
    pokemon_move_method_id: { [key: string]: number };
  }

  export interface version_group_regions {
    region_id: { [key: string]: number };
  }

  export interface version_groups {
    generation_id: { [key: string]: number };
    identifier: { [key: string]: string };
    order: { [key: string]: number };
  }

  export interface version_names {
    local_language_id: { [key: string]: number };
    name: { [key: string]: string };
  }

  export interface versions {
    identifier: { [key: string]: string };
    version_group_id: { [key: string]: number };
  }
}

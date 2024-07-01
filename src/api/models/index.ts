/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface AbilityChange
 */
export interface AbilityChange {
    /**
     * 
     * @type {VersionGroupSummary}
     * @memberof AbilityChange
     */
    versionGroup: VersionGroupSummary;
    /**
     * 
     * @type {Array<AbilityChangeEffectText>}
     * @memberof AbilityChange
     */
    effectEntries: Array<AbilityChangeEffectText>;
}
/**
 * 
 * @export
 * @interface AbilityChangeEffectText
 */
export interface AbilityChangeEffectText {
    /**
     * 
     * @type {string}
     * @memberof AbilityChangeEffectText
     */
    effect: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof AbilityChangeEffectText
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface AbilityDetail
 */
export interface AbilityDetail {
    /**
     * 
     * @type {number}
     * @memberof AbilityDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof AbilityDetail
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof AbilityDetail
     */
    isMainSeries?: boolean;
    /**
     * 
     * @type {GenerationSummary}
     * @memberof AbilityDetail
     */
    generation: GenerationSummary;
    /**
     * 
     * @type {Array<AbilityName>}
     * @memberof AbilityDetail
     */
    names: Array<AbilityName>;
    /**
     * 
     * @type {Array<AbilityEffectText>}
     * @memberof AbilityDetail
     */
    effectEntries: Array<AbilityEffectText>;
    /**
     * 
     * @type {Array<AbilityChange>}
     * @memberof AbilityDetail
     */
    effectChanges: Array<AbilityChange>;
    /**
     * 
     * @type {Array<AbilityFlavorText>}
     * @memberof AbilityDetail
     */
    flavorTextEntries: Array<AbilityFlavorText>;
    /**
     * 
     * @type {Array<AbilityDetailPokemonInner>}
     * @memberof AbilityDetail
     */
    pokemon: Array<AbilityDetailPokemonInner>;
}
/**
 * 
 * @export
 * @interface AbilityDetailPokemonInner
 */
export interface AbilityDetailPokemonInner {
    /**
     * 
     * @type {boolean}
     * @memberof AbilityDetailPokemonInner
     */
    isHidden: boolean;
    /**
     * 
     * @type {number}
     * @memberof AbilityDetailPokemonInner
     */
    slot: number;
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof AbilityDetailPokemonInner
     */
    pokemon: AbilityDetailPokemonInnerPokemon;
}
/**
 * 
 * @export
 * @interface AbilityDetailPokemonInnerPokemon
 */
export interface AbilityDetailPokemonInnerPokemon {
    /**
     * 
     * @type {string}
     * @memberof AbilityDetailPokemonInnerPokemon
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AbilityDetailPokemonInnerPokemon
     */
    url: string;
}
/**
 * 
 * @export
 * @interface AbilityEffectText
 */
export interface AbilityEffectText {
    /**
     * 
     * @type {string}
     * @memberof AbilityEffectText
     */
    effect: string;
    /**
     * 
     * @type {string}
     * @memberof AbilityEffectText
     */
    shortEffect: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof AbilityEffectText
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface AbilityFlavorText
 */
export interface AbilityFlavorText {
    /**
     * 
     * @type {string}
     * @memberof AbilityFlavorText
     */
    flavorText: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof AbilityFlavorText
     */
    language: LanguageSummary;
    /**
     * 
     * @type {VersionGroupSummary}
     * @memberof AbilityFlavorText
     */
    versionGroup: VersionGroupSummary;
}
/**
 * 
 * @export
 * @interface AbilityName
 */
export interface AbilityName {
    /**
     * 
     * @type {string}
     * @memberof AbilityName
     */
    name: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof AbilityName
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface AbilitySummary
 */
export interface AbilitySummary {
    /**
     * 
     * @type {string}
     * @memberof AbilitySummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AbilitySummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface BerryDetail
 */
export interface BerryDetail {
    /**
     * 
     * @type {number}
     * @memberof BerryDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof BerryDetail
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof BerryDetail
     */
    growthTime: number;
    /**
     * 
     * @type {number}
     * @memberof BerryDetail
     */
    maxHarvest: number;
    /**
     * 
     * @type {number}
     * @memberof BerryDetail
     */
    naturalGiftPower: number;
    /**
     * 
     * @type {number}
     * @memberof BerryDetail
     */
    size: number;
    /**
     * 
     * @type {number}
     * @memberof BerryDetail
     */
    smoothness: number;
    /**
     * 
     * @type {number}
     * @memberof BerryDetail
     */
    soilDryness: number;
    /**
     * 
     * @type {BerryFirmnessSummary}
     * @memberof BerryDetail
     */
    firmness: BerryFirmnessSummary;
    /**
     * 
     * @type {Array<BerryDetailFlavorsInner>}
     * @memberof BerryDetail
     */
    flavors: Array<BerryDetailFlavorsInner>;
    /**
     * 
     * @type {ItemSummary}
     * @memberof BerryDetail
     */
    item: ItemSummary;
    /**
     * 
     * @type {TypeSummary}
     * @memberof BerryDetail
     */
    naturalGiftType: TypeSummary;
}
/**
 * 
 * @export
 * @interface BerryDetailFlavorsInner
 */
export interface BerryDetailFlavorsInner {
    /**
     * 
     * @type {number}
     * @memberof BerryDetailFlavorsInner
     */
    potency: number;
    /**
     * 
     * @type {BerryDetailFlavorsInnerFlavor}
     * @memberof BerryDetailFlavorsInner
     */
    flavor: BerryDetailFlavorsInnerFlavor;
}
/**
 * 
 * @export
 * @interface BerryDetailFlavorsInnerFlavor
 */
export interface BerryDetailFlavorsInnerFlavor {
    /**
     * The name of the flavor
     * @type {string}
     * @memberof BerryDetailFlavorsInnerFlavor
     */
    name?: string;
    /**
     * The URL to get more information about the flavor
     * @type {string}
     * @memberof BerryDetailFlavorsInnerFlavor
     */
    url?: string;
}
/**
 * 
 * @export
 * @interface BerryFirmnessDetail
 */
export interface BerryFirmnessDetail {
    /**
     * 
     * @type {number}
     * @memberof BerryFirmnessDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof BerryFirmnessDetail
     */
    name: string;
    /**
     * 
     * @type {Array<BerrySummary>}
     * @memberof BerryFirmnessDetail
     */
    berries: Array<BerrySummary>;
    /**
     * 
     * @type {Array<BerryFirmnessName>}
     * @memberof BerryFirmnessDetail
     */
    names: Array<BerryFirmnessName>;
}
/**
 * 
 * @export
 * @interface BerryFirmnessName
 */
export interface BerryFirmnessName {
    /**
     * 
     * @type {string}
     * @memberof BerryFirmnessName
     */
    name: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof BerryFirmnessName
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface BerryFirmnessSummary
 */
export interface BerryFirmnessSummary {
    /**
     * 
     * @type {string}
     * @memberof BerryFirmnessSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof BerryFirmnessSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface BerryFlavorDetail
 */
export interface BerryFlavorDetail {
    /**
     * 
     * @type {number}
     * @memberof BerryFlavorDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof BerryFlavorDetail
     */
    name: string;
    /**
     * 
     * @type {Array<BerryFlavorDetailBerriesInner>}
     * @memberof BerryFlavorDetail
     */
    berries: Array<BerryFlavorDetailBerriesInner>;
    /**
     * 
     * @type {ContestTypeSummary}
     * @memberof BerryFlavorDetail
     */
    contestType: ContestTypeSummary;
    /**
     * 
     * @type {Array<BerryFlavorName>}
     * @memberof BerryFlavorDetail
     */
    names: Array<BerryFlavorName>;
}
/**
 * 
 * @export
 * @interface BerryFlavorDetailBerriesInner
 */
export interface BerryFlavorDetailBerriesInner {
    /**
     * 
     * @type {number}
     * @memberof BerryFlavorDetailBerriesInner
     */
    potency: number;
    /**
     * 
     * @type {BerryFlavorDetailBerriesInnerBerry}
     * @memberof BerryFlavorDetailBerriesInner
     */
    berry: BerryFlavorDetailBerriesInnerBerry;
}
/**
 * 
 * @export
 * @interface BerryFlavorDetailBerriesInnerBerry
 */
export interface BerryFlavorDetailBerriesInnerBerry {
    /**
     * The name of the berry
     * @type {string}
     * @memberof BerryFlavorDetailBerriesInnerBerry
     */
    name?: string;
    /**
     * The URL to get more information about the berry
     * @type {string}
     * @memberof BerryFlavorDetailBerriesInnerBerry
     */
    url?: string;
}
/**
 * 
 * @export
 * @interface BerryFlavorName
 */
export interface BerryFlavorName {
    /**
     * 
     * @type {string}
     * @memberof BerryFlavorName
     */
    name: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof BerryFlavorName
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface BerryFlavorSummary
 */
export interface BerryFlavorSummary {
    /**
     * 
     * @type {string}
     * @memberof BerryFlavorSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof BerryFlavorSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface BerrySummary
 */
export interface BerrySummary {
    /**
     * 
     * @type {string}
     * @memberof BerrySummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof BerrySummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface CharacteristicDescription
 */
export interface CharacteristicDescription {
    /**
     * 
     * @type {string}
     * @memberof CharacteristicDescription
     */
    description?: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof CharacteristicDescription
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface CharacteristicDetail
 */
export interface CharacteristicDetail {
    /**
     * 
     * @type {number}
     * @memberof CharacteristicDetail
     */
    readonly id: number;
    /**
     * 
     * @type {number}
     * @memberof CharacteristicDetail
     */
    geneModulo: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof CharacteristicDetail
     */
    possibleValues: Array<number>;
    /**
     * 
     * @type {StatSummary}
     * @memberof CharacteristicDetail
     */
    highestStat: StatSummary;
    /**
     * 
     * @type {Array<CharacteristicDescription>}
     * @memberof CharacteristicDetail
     */
    descriptions: Array<CharacteristicDescription>;
}
/**
 * 
 * @export
 * @interface CharacteristicSummary
 */
export interface CharacteristicSummary {
    /**
     * 
     * @type {string}
     * @memberof CharacteristicSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface ContestEffectDetail
 */
export interface ContestEffectDetail {
    /**
     * 
     * @type {number}
     * @memberof ContestEffectDetail
     */
    readonly id: number;
    /**
     * 
     * @type {number}
     * @memberof ContestEffectDetail
     */
    appeal: number;
    /**
     * 
     * @type {number}
     * @memberof ContestEffectDetail
     */
    jam: number;
    /**
     * 
     * @type {Array<ContestEffectEffectText>}
     * @memberof ContestEffectDetail
     */
    effectEntries: Array<ContestEffectEffectText>;
    /**
     * 
     * @type {Array<ContestEffectFlavorText>}
     * @memberof ContestEffectDetail
     */
    flavorTextEntries: Array<ContestEffectFlavorText>;
}
/**
 * 
 * @export
 * @interface ContestEffectEffectText
 */
export interface ContestEffectEffectText {
    /**
     * 
     * @type {string}
     * @memberof ContestEffectEffectText
     */
    effect: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof ContestEffectEffectText
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface ContestEffectFlavorText
 */
export interface ContestEffectFlavorText {
    /**
     * 
     * @type {string}
     * @memberof ContestEffectFlavorText
     */
    flavorText: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof ContestEffectFlavorText
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface ContestEffectSummary
 */
export interface ContestEffectSummary {
    /**
     * 
     * @type {string}
     * @memberof ContestEffectSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface ContestTypeDetail
 */
export interface ContestTypeDetail {
    /**
     * 
     * @type {number}
     * @memberof ContestTypeDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof ContestTypeDetail
     */
    name: string;
    /**
     * 
     * @type {ContestTypeDetailBerryFlavor}
     * @memberof ContestTypeDetail
     */
    berryFlavor: ContestTypeDetailBerryFlavor;
    /**
     * 
     * @type {Array<ContestTypeName>}
     * @memberof ContestTypeDetail
     */
    names: Array<ContestTypeName>;
}
/**
 * 
 * @export
 * @interface ContestTypeDetailBerryFlavor
 */
export interface ContestTypeDetailBerryFlavor {
    /**
     * 
     * @type {string}
     * @memberof ContestTypeDetailBerryFlavor
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ContestTypeDetailBerryFlavor
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface ContestTypeName
 */
export interface ContestTypeName {
    /**
     * 
     * @type {string}
     * @memberof ContestTypeName
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ContestTypeName
     */
    color: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof ContestTypeName
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface ContestTypeSummary
 */
export interface ContestTypeSummary {
    /**
     * 
     * @type {string}
     * @memberof ContestTypeSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ContestTypeSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface EggGroupDetail
 */
export interface EggGroupDetail {
    /**
     * 
     * @type {number}
     * @memberof EggGroupDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof EggGroupDetail
     */
    name: string;
    /**
     * 
     * @type {Array<EggGroupName>}
     * @memberof EggGroupDetail
     */
    names: Array<EggGroupName>;
    /**
     * 
     * @type {Array<EggGroupDetailPokemonSpeciesInner>}
     * @memberof EggGroupDetail
     */
    pokemonSpecies: Array<EggGroupDetailPokemonSpeciesInner>;
}
/**
 * 
 * @export
 * @interface EggGroupDetailPokemonSpeciesInner
 */
export interface EggGroupDetailPokemonSpeciesInner {
    /**
     * Pokemon species name.
     * @type {string}
     * @memberof EggGroupDetailPokemonSpeciesInner
     */
    name?: string;
    /**
     * The URL to get more information about the species
     * @type {string}
     * @memberof EggGroupDetailPokemonSpeciesInner
     */
    url?: string;
}
/**
 * 
 * @export
 * @interface EggGroupName
 */
export interface EggGroupName {
    /**
     * 
     * @type {string}
     * @memberof EggGroupName
     */
    name: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof EggGroupName
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface EggGroupSummary
 */
export interface EggGroupSummary {
    /**
     * 
     * @type {string}
     * @memberof EggGroupSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof EggGroupSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface EncounterConditionDetail
 */
export interface EncounterConditionDetail {
    /**
     * 
     * @type {number}
     * @memberof EncounterConditionDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof EncounterConditionDetail
     */
    name: string;
    /**
     * 
     * @type {Array<EncounterConditionValueSummary>}
     * @memberof EncounterConditionDetail
     */
    values: Array<EncounterConditionValueSummary>;
    /**
     * 
     * @type {Array<EncounterConditionName>}
     * @memberof EncounterConditionDetail
     */
    names: Array<EncounterConditionName>;
}
/**
 * 
 * @export
 * @interface EncounterConditionName
 */
export interface EncounterConditionName {
    /**
     * 
     * @type {string}
     * @memberof EncounterConditionName
     */
    name: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof EncounterConditionName
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface EncounterConditionSummary
 */
export interface EncounterConditionSummary {
    /**
     * 
     * @type {string}
     * @memberof EncounterConditionSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof EncounterConditionSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface EncounterConditionValueDetail
 */
export interface EncounterConditionValueDetail {
    /**
     * 
     * @type {number}
     * @memberof EncounterConditionValueDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof EncounterConditionValueDetail
     */
    name: string;
    /**
     * 
     * @type {EncounterConditionSummary}
     * @memberof EncounterConditionValueDetail
     */
    condition: EncounterConditionSummary;
    /**
     * 
     * @type {Array<EncounterConditionValueName>}
     * @memberof EncounterConditionValueDetail
     */
    names: Array<EncounterConditionValueName>;
}
/**
 * 
 * @export
 * @interface EncounterConditionValueName
 */
export interface EncounterConditionValueName {
    /**
     * 
     * @type {string}
     * @memberof EncounterConditionValueName
     */
    name: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof EncounterConditionValueName
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface EncounterConditionValueSummary
 */
export interface EncounterConditionValueSummary {
    /**
     * 
     * @type {string}
     * @memberof EncounterConditionValueSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof EncounterConditionValueSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface EncounterMethodDetail
 */
export interface EncounterMethodDetail {
    /**
     * 
     * @type {number}
     * @memberof EncounterMethodDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof EncounterMethodDetail
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof EncounterMethodDetail
     */
    order?: number;
    /**
     * 
     * @type {Array<EncounterMethodName>}
     * @memberof EncounterMethodDetail
     */
    names: Array<EncounterMethodName>;
}
/**
 * 
 * @export
 * @interface EncounterMethodName
 */
export interface EncounterMethodName {
    /**
     * 
     * @type {string}
     * @memberof EncounterMethodName
     */
    name: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof EncounterMethodName
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface EncounterMethodSummary
 */
export interface EncounterMethodSummary {
    /**
     * 
     * @type {string}
     * @memberof EncounterMethodSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof EncounterMethodSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface EvolutionChainDetail
 */
export interface EvolutionChainDetail {
    /**
     * 
     * @type {number}
     * @memberof EvolutionChainDetail
     */
    readonly id: number;
    /**
     * 
     * @type {ItemSummary}
     * @memberof EvolutionChainDetail
     */
    babyTriggerItem: ItemSummary;
    /**
     * 
     * @type {EvolutionChainDetailChain}
     * @memberof EvolutionChainDetail
     */
    chain: EvolutionChainDetailChain;
}
/**
 * 
 * @export
 * @interface EvolutionChainDetailChain
 */
export interface EvolutionChainDetailChain {
    /**
     * 
     * @type {Array<any>}
     * @memberof EvolutionChainDetailChain
     */
    evolutionDetails: Array<any>;
    /**
     * 
     * @type {Array<EvolutionChainDetailChainEvolvesToInner>}
     * @memberof EvolutionChainDetailChain
     */
    evolvesTo: Array<EvolutionChainDetailChainEvolvesToInner>;
    /**
     * 
     * @type {boolean}
     * @memberof EvolutionChainDetailChain
     */
    isBaby: boolean;
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof EvolutionChainDetailChain
     */
    species: AbilityDetailPokemonInnerPokemon;
}
/**
 * 
 * @export
 * @interface EvolutionChainDetailChainEvolvesToInner
 */
export interface EvolutionChainDetailChainEvolvesToInner {
    /**
     * 
     * @type {Array<EvolutionChainDetailChainEvolvesToInnerEvolutionDetailsInner>}
     * @memberof EvolutionChainDetailChainEvolvesToInner
     */
    evolutionDetails: Array<EvolutionChainDetailChainEvolvesToInnerEvolutionDetailsInner>;
    /**
     * 
     * @type {boolean}
     * @memberof EvolutionChainDetailChainEvolvesToInner
     */
    isBaby: boolean;
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof EvolutionChainDetailChainEvolvesToInner
     */
    species: AbilityDetailPokemonInnerPokemon;
}
/**
 * 
 * @export
 * @interface EvolutionChainDetailChainEvolvesToInnerEvolutionDetailsInner
 */
export interface EvolutionChainDetailChainEvolvesToInnerEvolutionDetailsInner {
    /**
     * 
     * @type {EvolutionChainDetailChainEvolvesToInnerEvolutionDetailsInnerGender}
     * @memberof EvolutionChainDetailChainEvolvesToInnerEvolutionDetailsInner
     */
    gender: EvolutionChainDetailChainEvolvesToInnerEvolutionDetailsInnerGender;
    /**
     * 
     * @type {EvolutionChainDetailChainEvolvesToInnerEvolutionDetailsInnerGender}
     * @memberof EvolutionChainDetailChainEvolvesToInnerEvolutionDetailsInner
     */
    heldItem: EvolutionChainDetailChainEvolvesToInnerEvolutionDetailsInnerGender;
    /**
     * 
     * @type {EvolutionChainDetailChainEvolvesToInnerEvolutionDetailsInnerGender}
     * @memberof EvolutionChainDetailChainEvolvesToInnerEvolutionDetailsInner
     */
    item: EvolutionChainDetailChainEvolvesToInnerEvolutionDetailsInnerGender;
    /**
     * 
     * @type {object}
     * @memberof EvolutionChainDetailChainEvolvesToInnerEvolutionDetailsInner
     */
    knownMove: object;
    /**
     * 
     * @type {object}
     * @memberof EvolutionChainDetailChainEvolvesToInnerEvolutionDetailsInner
     */
    knownMoveType: object;
    /**
     * 
     * @type {EvolutionChainDetailChainEvolvesToInnerEvolutionDetailsInnerGender}
     * @memberof EvolutionChainDetailChainEvolvesToInnerEvolutionDetailsInner
     */
    location: EvolutionChainDetailChainEvolvesToInnerEvolutionDetailsInnerGender;
    /**
     * 
     * @type {number}
     * @memberof EvolutionChainDetailChainEvolvesToInnerEvolutionDetailsInner
     */
    minAffection: number;
    /**
     * 
     * @type {number}
     * @memberof EvolutionChainDetailChainEvolvesToInnerEvolutionDetailsInner
     */
    minBeauty: number;
    /**
     * 
     * @type {number}
     * @memberof EvolutionChainDetailChainEvolvesToInnerEvolutionDetailsInner
     */
    minHappiness: number;
    /**
     * 
     * @type {number}
     * @memberof EvolutionChainDetailChainEvolvesToInnerEvolutionDetailsInner
     */
    minLevel: number;
    /**
     * 
     * @type {boolean}
     * @memberof EvolutionChainDetailChainEvolvesToInnerEvolutionDetailsInner
     */
    needsOverworldRain: boolean;
    /**
     * 
     * @type {string}
     * @memberof EvolutionChainDetailChainEvolvesToInnerEvolutionDetailsInner
     */
    partySpecies: string;
    /**
     * 
     * @type {string}
     * @memberof EvolutionChainDetailChainEvolvesToInnerEvolutionDetailsInner
     */
    partyType: string;
    /**
     * 
     * @type {string}
     * @memberof EvolutionChainDetailChainEvolvesToInnerEvolutionDetailsInner
     */
    relativePhysicalStats: string;
    /**
     * 
     * @type {string}
     * @memberof EvolutionChainDetailChainEvolvesToInnerEvolutionDetailsInner
     */
    timeOfDay: string;
    /**
     * 
     * @type {string}
     * @memberof EvolutionChainDetailChainEvolvesToInnerEvolutionDetailsInner
     */
    tradeSpecies: string;
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof EvolutionChainDetailChainEvolvesToInnerEvolutionDetailsInner
     */
    trigger: AbilityDetailPokemonInnerPokemon;
    /**
     * 
     * @type {boolean}
     * @memberof EvolutionChainDetailChainEvolvesToInnerEvolutionDetailsInner
     */
    turnUpsideDown: boolean;
}
/**
 * 
 * @export
 * @interface EvolutionChainDetailChainEvolvesToInnerEvolutionDetailsInnerGender
 */
export interface EvolutionChainDetailChainEvolvesToInnerEvolutionDetailsInnerGender {
    /**
     * 
     * @type {string}
     * @memberof EvolutionChainDetailChainEvolvesToInnerEvolutionDetailsInnerGender
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof EvolutionChainDetailChainEvolvesToInnerEvolutionDetailsInnerGender
     */
    url: string;
}
/**
 * 
 * @export
 * @interface EvolutionChainSummary
 */
export interface EvolutionChainSummary {
    /**
     * 
     * @type {string}
     * @memberof EvolutionChainSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface EvolutionTriggerDetail
 */
export interface EvolutionTriggerDetail {
    /**
     * 
     * @type {number}
     * @memberof EvolutionTriggerDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof EvolutionTriggerDetail
     */
    name: string;
    /**
     * 
     * @type {Array<EvolutionTriggerName>}
     * @memberof EvolutionTriggerDetail
     */
    names: Array<EvolutionTriggerName>;
    /**
     * 
     * @type {Array<AbilityDetailPokemonInnerPokemon>}
     * @memberof EvolutionTriggerDetail
     */
    pokemonSpecies: Array<AbilityDetailPokemonInnerPokemon>;
}
/**
 * 
 * @export
 * @interface EvolutionTriggerName
 */
export interface EvolutionTriggerName {
    /**
     * 
     * @type {string}
     * @memberof EvolutionTriggerName
     */
    name: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof EvolutionTriggerName
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface EvolutionTriggerSummary
 */
export interface EvolutionTriggerSummary {
    /**
     * 
     * @type {string}
     * @memberof EvolutionTriggerSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof EvolutionTriggerSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface Experience
 */
export interface Experience {
    /**
     * 
     * @type {number}
     * @memberof Experience
     */
    level: number;
    /**
     * 
     * @type {number}
     * @memberof Experience
     */
    experience: number;
}
/**
 * 
 * @export
 * @interface GenderDetail
 */
export interface GenderDetail {
    /**
     * 
     * @type {number}
     * @memberof GenderDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof GenderDetail
     */
    name: string;
    /**
     * 
     * @type {Array<GenderDetailPokemonSpeciesDetailsInner>}
     * @memberof GenderDetail
     */
    pokemonSpeciesDetails: Array<GenderDetailPokemonSpeciesDetailsInner>;
    /**
     * 
     * @type {Array<AbilityDetailPokemonInnerPokemon>}
     * @memberof GenderDetail
     */
    requiredForEvolution: Array<AbilityDetailPokemonInnerPokemon>;
}
/**
 * 
 * @export
 * @interface GenderDetailPokemonSpeciesDetailsInner
 */
export interface GenderDetailPokemonSpeciesDetailsInner {
    /**
     * 
     * @type {number}
     * @memberof GenderDetailPokemonSpeciesDetailsInner
     */
    rate: number;
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof GenderDetailPokemonSpeciesDetailsInner
     */
    pokemonSpecies: AbilityDetailPokemonInnerPokemon;
}
/**
 * 
 * @export
 * @interface GenderSummary
 */
export interface GenderSummary {
    /**
     * 
     * @type {string}
     * @memberof GenderSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof GenderSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface GenerationDetail
 */
export interface GenerationDetail {
    /**
     * 
     * @type {number}
     * @memberof GenerationDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof GenerationDetail
     */
    name: string;
    /**
     * 
     * @type {Array<AbilitySummary>}
     * @memberof GenerationDetail
     */
    abilities: Array<AbilitySummary>;
    /**
     * 
     * @type {RegionSummary}
     * @memberof GenerationDetail
     */
    mainRegion: RegionSummary;
    /**
     * 
     * @type {Array<MoveSummary>}
     * @memberof GenerationDetail
     */
    moves: Array<MoveSummary>;
    /**
     * 
     * @type {Array<GenerationName>}
     * @memberof GenerationDetail
     */
    names: Array<GenerationName>;
    /**
     * 
     * @type {Array<PokemonSpeciesSummary>}
     * @memberof GenerationDetail
     */
    pokemonSpecies: Array<PokemonSpeciesSummary>;
    /**
     * 
     * @type {Array<TypeSummary>}
     * @memberof GenerationDetail
     */
    types: Array<TypeSummary>;
    /**
     * 
     * @type {Array<VersionGroupSummary>}
     * @memberof GenerationDetail
     */
    versionGroups: Array<VersionGroupSummary>;
}
/**
 * 
 * @export
 * @interface GenerationName
 */
export interface GenerationName {
    /**
     * 
     * @type {string}
     * @memberof GenerationName
     */
    name: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof GenerationName
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface GenerationSummary
 */
export interface GenerationSummary {
    /**
     * 
     * @type {string}
     * @memberof GenerationSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof GenerationSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface GrowthRateDescription
 */
export interface GrowthRateDescription {
    /**
     * 
     * @type {string}
     * @memberof GrowthRateDescription
     */
    description?: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof GrowthRateDescription
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface GrowthRateDetail
 */
export interface GrowthRateDetail {
    /**
     * 
     * @type {number}
     * @memberof GrowthRateDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof GrowthRateDetail
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof GrowthRateDetail
     */
    formula: string;
    /**
     * 
     * @type {Array<GrowthRateDescription>}
     * @memberof GrowthRateDetail
     */
    descriptions: Array<GrowthRateDescription>;
    /**
     * 
     * @type {Array<Experience>}
     * @memberof GrowthRateDetail
     */
    levels: Array<Experience>;
    /**
     * 
     * @type {Array<PokemonSpeciesSummary>}
     * @memberof GrowthRateDetail
     */
    pokemonSpecies: Array<PokemonSpeciesSummary>;
}
/**
 * 
 * @export
 * @interface GrowthRateSummary
 */
export interface GrowthRateSummary {
    /**
     * 
     * @type {string}
     * @memberof GrowthRateSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof GrowthRateSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface ItemAttributeDescription
 */
export interface ItemAttributeDescription {
    /**
     * 
     * @type {string}
     * @memberof ItemAttributeDescription
     */
    description?: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof ItemAttributeDescription
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface ItemAttributeDetail
 */
export interface ItemAttributeDetail {
    /**
     * 
     * @type {number}
     * @memberof ItemAttributeDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof ItemAttributeDetail
     */
    name: string;
    /**
     * 
     * @type {Array<ItemAttributeDescription>}
     * @memberof ItemAttributeDetail
     */
    descriptions: Array<ItemAttributeDescription>;
    /**
     * 
     * @type {Array<AbilityDetailPokemonInnerPokemon>}
     * @memberof ItemAttributeDetail
     */
    items: Array<AbilityDetailPokemonInnerPokemon>;
    /**
     * 
     * @type {Array<ItemAttributeName>}
     * @memberof ItemAttributeDetail
     */
    names: Array<ItemAttributeName>;
}
/**
 * 
 * @export
 * @interface ItemAttributeName
 */
export interface ItemAttributeName {
    /**
     * 
     * @type {string}
     * @memberof ItemAttributeName
     */
    name: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof ItemAttributeName
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface ItemAttributeSummary
 */
export interface ItemAttributeSummary {
    /**
     * 
     * @type {string}
     * @memberof ItemAttributeSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ItemAttributeSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface ItemCategoryDetail
 */
export interface ItemCategoryDetail {
    /**
     * 
     * @type {number}
     * @memberof ItemCategoryDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof ItemCategoryDetail
     */
    name: string;
    /**
     * 
     * @type {Array<ItemSummary>}
     * @memberof ItemCategoryDetail
     */
    items: Array<ItemSummary>;
    /**
     * 
     * @type {Array<ItemCategoryName>}
     * @memberof ItemCategoryDetail
     */
    names: Array<ItemCategoryName>;
    /**
     * 
     * @type {ItemPocketSummary}
     * @memberof ItemCategoryDetail
     */
    pocket: ItemPocketSummary;
}
/**
 * 
 * @export
 * @interface ItemCategoryName
 */
export interface ItemCategoryName {
    /**
     * 
     * @type {string}
     * @memberof ItemCategoryName
     */
    name: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof ItemCategoryName
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface ItemCategorySummary
 */
export interface ItemCategorySummary {
    /**
     * 
     * @type {string}
     * @memberof ItemCategorySummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ItemCategorySummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface ItemDetail
 */
export interface ItemDetail {
    /**
     * 
     * @type {number}
     * @memberof ItemDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof ItemDetail
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof ItemDetail
     */
    cost?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemDetail
     */
    flingPower?: number;
    /**
     * 
     * @type {ItemFlingEffectSummary}
     * @memberof ItemDetail
     */
    flingEffect: ItemFlingEffectSummary;
    /**
     * 
     * @type {Array<AbilityDetailPokemonInnerPokemon>}
     * @memberof ItemDetail
     */
    attributes: Array<AbilityDetailPokemonInnerPokemon>;
    /**
     * 
     * @type {ItemCategorySummary}
     * @memberof ItemDetail
     */
    category: ItemCategorySummary;
    /**
     * 
     * @type {Array<ItemEffectText>}
     * @memberof ItemDetail
     */
    effectEntries: Array<ItemEffectText>;
    /**
     * 
     * @type {Array<ItemFlavorText>}
     * @memberof ItemDetail
     */
    flavorTextEntries: Array<ItemFlavorText>;
    /**
     * 
     * @type {Array<ItemGameIndex>}
     * @memberof ItemDetail
     */
    gameIndices: Array<ItemGameIndex>;
    /**
     * 
     * @type {Array<ItemName>}
     * @memberof ItemDetail
     */
    names: Array<ItemName>;
    /**
     * 
     * @type {Array<ItemDetailHeldByPokemonInner>}
     * @memberof ItemDetail
     */
    heldByPokemon: Array<ItemDetailHeldByPokemonInner>;
    /**
     * 
     * @type {ItemDetailSprites}
     * @memberof ItemDetail
     */
    sprites: ItemDetailSprites;
    /**
     * 
     * @type {ItemDetailBabyTriggerFor}
     * @memberof ItemDetail
     */
    babyTriggerFor: ItemDetailBabyTriggerFor;
    /**
     * 
     * @type {Array<ItemDetailMachinesInner>}
     * @memberof ItemDetail
     */
    machines: Array<ItemDetailMachinesInner>;
}
/**
 * 
 * @export
 * @interface ItemDetailBabyTriggerFor
 */
export interface ItemDetailBabyTriggerFor {
    /**
     * 
     * @type {string}
     * @memberof ItemDetailBabyTriggerFor
     */
    url: string;
}
/**
 * 
 * @export
 * @interface ItemDetailHeldByPokemonInner
 */
export interface ItemDetailHeldByPokemonInner {
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof ItemDetailHeldByPokemonInner
     */
    pokemon: AbilityDetailPokemonInnerPokemon;
    /**
     * 
     * @type {Array<ItemDetailHeldByPokemonInnerVersionDetailsInner>}
     * @memberof ItemDetailHeldByPokemonInner
     */
    versionDetails: Array<ItemDetailHeldByPokemonInnerVersionDetailsInner>;
}
/**
 * 
 * @export
 * @interface ItemDetailHeldByPokemonInnerVersionDetailsInner
 */
export interface ItemDetailHeldByPokemonInnerVersionDetailsInner {
    /**
     * 
     * @type {number}
     * @memberof ItemDetailHeldByPokemonInnerVersionDetailsInner
     */
    rarity: number;
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof ItemDetailHeldByPokemonInnerVersionDetailsInner
     */
    version: AbilityDetailPokemonInnerPokemon;
}
/**
 * 
 * @export
 * @interface ItemDetailMachinesInner
 */
export interface ItemDetailMachinesInner {
    /**
     * 
     * @type {string}
     * @memberof ItemDetailMachinesInner
     */
    machine: string;
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof ItemDetailMachinesInner
     */
    versionGroup: AbilityDetailPokemonInnerPokemon;
}
/**
 * 
 * @export
 * @interface ItemDetailSprites
 */
export interface ItemDetailSprites {
    /**
     * 
     * @type {string}
     * @memberof ItemDetailSprites
     */
    _default: string;
}
/**
 * 
 * @export
 * @interface ItemEffectText
 */
export interface ItemEffectText {
    /**
     * 
     * @type {string}
     * @memberof ItemEffectText
     */
    effect: string;
    /**
     * 
     * @type {string}
     * @memberof ItemEffectText
     */
    shortEffect: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof ItemEffectText
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface ItemFlavorText
 */
export interface ItemFlavorText {
    /**
     * 
     * @type {string}
     * @memberof ItemFlavorText
     */
    text: string;
    /**
     * 
     * @type {VersionGroupSummary}
     * @memberof ItemFlavorText
     */
    versionGroup: VersionGroupSummary;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof ItemFlavorText
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface ItemFlingEffectDetail
 */
export interface ItemFlingEffectDetail {
    /**
     * 
     * @type {number}
     * @memberof ItemFlingEffectDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof ItemFlingEffectDetail
     */
    name: string;
    /**
     * 
     * @type {Array<ItemFlingEffectEffectText>}
     * @memberof ItemFlingEffectDetail
     */
    effectEntries: Array<ItemFlingEffectEffectText>;
    /**
     * 
     * @type {Array<ItemSummary>}
     * @memberof ItemFlingEffectDetail
     */
    items: Array<ItemSummary>;
}
/**
 * 
 * @export
 * @interface ItemFlingEffectEffectText
 */
export interface ItemFlingEffectEffectText {
    /**
     * 
     * @type {string}
     * @memberof ItemFlingEffectEffectText
     */
    effect: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof ItemFlingEffectEffectText
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface ItemFlingEffectSummary
 */
export interface ItemFlingEffectSummary {
    /**
     * 
     * @type {string}
     * @memberof ItemFlingEffectSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ItemFlingEffectSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface ItemGameIndex
 */
export interface ItemGameIndex {
    /**
     * 
     * @type {number}
     * @memberof ItemGameIndex
     */
    gameIndex: number;
    /**
     * 
     * @type {GenerationSummary}
     * @memberof ItemGameIndex
     */
    generation: GenerationSummary;
}
/**
 * 
 * @export
 * @interface ItemName
 */
export interface ItemName {
    /**
     * 
     * @type {string}
     * @memberof ItemName
     */
    name: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof ItemName
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface ItemPocketDetail
 */
export interface ItemPocketDetail {
    /**
     * 
     * @type {number}
     * @memberof ItemPocketDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof ItemPocketDetail
     */
    name: string;
    /**
     * 
     * @type {Array<ItemCategorySummary>}
     * @memberof ItemPocketDetail
     */
    categories: Array<ItemCategorySummary>;
    /**
     * 
     * @type {Array<ItemPocketName>}
     * @memberof ItemPocketDetail
     */
    names: Array<ItemPocketName>;
}
/**
 * 
 * @export
 * @interface ItemPocketName
 */
export interface ItemPocketName {
    /**
     * 
     * @type {string}
     * @memberof ItemPocketName
     */
    name: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof ItemPocketName
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface ItemPocketSummary
 */
export interface ItemPocketSummary {
    /**
     * 
     * @type {string}
     * @memberof ItemPocketSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ItemPocketSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface ItemSummary
 */
export interface ItemSummary {
    /**
     * 
     * @type {string}
     * @memberof ItemSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ItemSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface LanguageDetail
 */
export interface LanguageDetail {
    /**
     * 
     * @type {number}
     * @memberof LanguageDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof LanguageDetail
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof LanguageDetail
     */
    official?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LanguageDetail
     */
    iso639: string;
    /**
     * 
     * @type {string}
     * @memberof LanguageDetail
     */
    iso3166: string;
    /**
     * 
     * @type {Array<LanguageName>}
     * @memberof LanguageDetail
     */
    names: Array<LanguageName>;
}
/**
 * 
 * @export
 * @interface LanguageName
 */
export interface LanguageName {
    /**
     * 
     * @type {string}
     * @memberof LanguageName
     */
    name: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof LanguageName
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface LanguageSummary
 */
export interface LanguageSummary {
    /**
     * 
     * @type {string}
     * @memberof LanguageSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof LanguageSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface LocationAreaDetail
 */
export interface LocationAreaDetail {
    /**
     * 
     * @type {number}
     * @memberof LocationAreaDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof LocationAreaDetail
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof LocationAreaDetail
     */
    gameIndex: number;
    /**
     * 
     * @type {Array<LocationAreaDetailEncounterMethodRatesInner>}
     * @memberof LocationAreaDetail
     */
    encounterMethodRates: Array<LocationAreaDetailEncounterMethodRatesInner>;
    /**
     * 
     * @type {LocationSummary}
     * @memberof LocationAreaDetail
     */
    location: LocationSummary;
    /**
     * 
     * @type {Array<LocationAreaName>}
     * @memberof LocationAreaDetail
     */
    names: Array<LocationAreaName>;
    /**
     * 
     * @type {Array<LocationAreaDetailPokemonEncountersInner>}
     * @memberof LocationAreaDetail
     */
    pokemonEncounters: Array<LocationAreaDetailPokemonEncountersInner>;
}
/**
 * 
 * @export
 * @interface LocationAreaDetailEncounterMethodRatesInner
 */
export interface LocationAreaDetailEncounterMethodRatesInner {
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof LocationAreaDetailEncounterMethodRatesInner
     */
    encounterMethod: AbilityDetailPokemonInnerPokemon;
    /**
     * 
     * @type {Array<LocationAreaDetailEncounterMethodRatesInnerVersionDetailsInner>}
     * @memberof LocationAreaDetailEncounterMethodRatesInner
     */
    versionDetails: Array<LocationAreaDetailEncounterMethodRatesInnerVersionDetailsInner>;
}
/**
 * 
 * @export
 * @interface LocationAreaDetailEncounterMethodRatesInnerVersionDetailsInner
 */
export interface LocationAreaDetailEncounterMethodRatesInnerVersionDetailsInner {
    /**
     * 
     * @type {number}
     * @memberof LocationAreaDetailEncounterMethodRatesInnerVersionDetailsInner
     */
    rate: number;
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof LocationAreaDetailEncounterMethodRatesInnerVersionDetailsInner
     */
    version: AbilityDetailPokemonInnerPokemon;
}
/**
 * 
 * @export
 * @interface LocationAreaDetailPokemonEncountersInner
 */
export interface LocationAreaDetailPokemonEncountersInner {
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof LocationAreaDetailPokemonEncountersInner
     */
    pokemon: AbilityDetailPokemonInnerPokemon;
    /**
     * 
     * @type {Array<LocationAreaDetailPokemonEncountersInnerVersionDetailsInner>}
     * @memberof LocationAreaDetailPokemonEncountersInner
     */
    versionDetails: Array<LocationAreaDetailPokemonEncountersInnerVersionDetailsInner>;
}
/**
 * 
 * @export
 * @interface LocationAreaDetailPokemonEncountersInnerVersionDetailsInner
 */
export interface LocationAreaDetailPokemonEncountersInnerVersionDetailsInner {
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof LocationAreaDetailPokemonEncountersInnerVersionDetailsInner
     */
    version: AbilityDetailPokemonInnerPokemon;
    /**
     * 
     * @type {number}
     * @memberof LocationAreaDetailPokemonEncountersInnerVersionDetailsInner
     */
    maxChance: number;
    /**
     * 
     * @type {LocationAreaDetailPokemonEncountersInnerVersionDetailsInnerEncounterDetails}
     * @memberof LocationAreaDetailPokemonEncountersInnerVersionDetailsInner
     */
    encounterDetails: LocationAreaDetailPokemonEncountersInnerVersionDetailsInnerEncounterDetails;
}
/**
 * 
 * @export
 * @interface LocationAreaDetailPokemonEncountersInnerVersionDetailsInnerEncounterDetails
 */
export interface LocationAreaDetailPokemonEncountersInnerVersionDetailsInnerEncounterDetails {
    /**
     * 
     * @type {number}
     * @memberof LocationAreaDetailPokemonEncountersInnerVersionDetailsInnerEncounterDetails
     */
    minLevel: number;
    /**
     * 
     * @type {number}
     * @memberof LocationAreaDetailPokemonEncountersInnerVersionDetailsInnerEncounterDetails
     */
    maxLevel: number;
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof LocationAreaDetailPokemonEncountersInnerVersionDetailsInnerEncounterDetails
     */
    conditionValues?: AbilityDetailPokemonInnerPokemon;
    /**
     * 
     * @type {number}
     * @memberof LocationAreaDetailPokemonEncountersInnerVersionDetailsInnerEncounterDetails
     */
    chance: number;
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof LocationAreaDetailPokemonEncountersInnerVersionDetailsInnerEncounterDetails
     */
    method: AbilityDetailPokemonInnerPokemon;
}
/**
 * 
 * @export
 * @interface LocationAreaName
 */
export interface LocationAreaName {
    /**
     * 
     * @type {string}
     * @memberof LocationAreaName
     */
    name: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof LocationAreaName
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface LocationAreaSummary
 */
export interface LocationAreaSummary {
    /**
     * 
     * @type {string}
     * @memberof LocationAreaSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof LocationAreaSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface LocationDetail
 */
export interface LocationDetail {
    /**
     * 
     * @type {number}
     * @memberof LocationDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof LocationDetail
     */
    name: string;
    /**
     * 
     * @type {RegionSummary}
     * @memberof LocationDetail
     */
    region: RegionSummary;
    /**
     * 
     * @type {Array<LocationName>}
     * @memberof LocationDetail
     */
    names: Array<LocationName>;
    /**
     * 
     * @type {Array<LocationGameIndex>}
     * @memberof LocationDetail
     */
    gameIndices: Array<LocationGameIndex>;
    /**
     * 
     * @type {Array<LocationAreaSummary>}
     * @memberof LocationDetail
     */
    areas: Array<LocationAreaSummary>;
}
/**
 * 
 * @export
 * @interface LocationGameIndex
 */
export interface LocationGameIndex {
    /**
     * 
     * @type {number}
     * @memberof LocationGameIndex
     */
    gameIndex: number;
    /**
     * 
     * @type {GenerationSummary}
     * @memberof LocationGameIndex
     */
    generation: GenerationSummary;
}
/**
 * 
 * @export
 * @interface LocationName
 */
export interface LocationName {
    /**
     * 
     * @type {string}
     * @memberof LocationName
     */
    name: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof LocationName
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface LocationSummary
 */
export interface LocationSummary {
    /**
     * 
     * @type {string}
     * @memberof LocationSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof LocationSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface MachineDetail
 */
export interface MachineDetail {
    /**
     * 
     * @type {number}
     * @memberof MachineDetail
     */
    readonly id: number;
    /**
     * 
     * @type {ItemSummary}
     * @memberof MachineDetail
     */
    item: ItemSummary;
    /**
     * 
     * @type {VersionGroupSummary}
     * @memberof MachineDetail
     */
    versionGroup: VersionGroupSummary;
    /**
     * 
     * @type {MoveSummary}
     * @memberof MachineDetail
     */
    move: MoveSummary;
}
/**
 * 
 * @export
 * @interface MachineSummary
 */
export interface MachineSummary {
    /**
     * 
     * @type {string}
     * @memberof MachineSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface MoveBattleStyleDetail
 */
export interface MoveBattleStyleDetail {
    /**
     * 
     * @type {number}
     * @memberof MoveBattleStyleDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof MoveBattleStyleDetail
     */
    name: string;
    /**
     * 
     * @type {Array<MoveBattleStyleName>}
     * @memberof MoveBattleStyleDetail
     */
    names: Array<MoveBattleStyleName>;
}
/**
 * 
 * @export
 * @interface MoveBattleStyleName
 */
export interface MoveBattleStyleName {
    /**
     * 
     * @type {string}
     * @memberof MoveBattleStyleName
     */
    name: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof MoveBattleStyleName
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface MoveBattleStyleSummary
 */
export interface MoveBattleStyleSummary {
    /**
     * 
     * @type {string}
     * @memberof MoveBattleStyleSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof MoveBattleStyleSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface MoveChange
 */
export interface MoveChange {
    /**
     * 
     * @type {number}
     * @memberof MoveChange
     */
    accuracy?: number;
    /**
     * 
     * @type {number}
     * @memberof MoveChange
     */
    power?: number;
    /**
     * 
     * @type {number}
     * @memberof MoveChange
     */
    pp?: number;
    /**
     * 
     * @type {number}
     * @memberof MoveChange
     */
    effectChance: number;
    /**
     * 
     * @type {Array<MoveChangeEffectEntriesInner>}
     * @memberof MoveChange
     */
    effectEntries: Array<MoveChangeEffectEntriesInner>;
    /**
     * 
     * @type {TypeSummary}
     * @memberof MoveChange
     */
    type: TypeSummary;
    /**
     * 
     * @type {VersionGroupSummary}
     * @memberof MoveChange
     */
    versionGroup: VersionGroupSummary;
}
/**
 * 
 * @export
 * @interface MoveChangeEffectEntriesInner
 */
export interface MoveChangeEffectEntriesInner {
    /**
     * 
     * @type {string}
     * @memberof MoveChangeEffectEntriesInner
     */
    effect: string;
    /**
     * 
     * @type {string}
     * @memberof MoveChangeEffectEntriesInner
     */
    shortEffect: string;
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof MoveChangeEffectEntriesInner
     */
    language: AbilityDetailPokemonInnerPokemon;
}
/**
 * 
 * @export
 * @interface MoveDamageClassDescription
 */
export interface MoveDamageClassDescription {
    /**
     * 
     * @type {string}
     * @memberof MoveDamageClassDescription
     */
    description?: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof MoveDamageClassDescription
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface MoveDamageClassDetail
 */
export interface MoveDamageClassDetail {
    /**
     * 
     * @type {number}
     * @memberof MoveDamageClassDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof MoveDamageClassDetail
     */
    name: string;
    /**
     * 
     * @type {Array<MoveDamageClassDescription>}
     * @memberof MoveDamageClassDetail
     */
    descriptions: Array<MoveDamageClassDescription>;
    /**
     * 
     * @type {Array<MoveSummary>}
     * @memberof MoveDamageClassDetail
     */
    moves: Array<MoveSummary>;
    /**
     * 
     * @type {Array<MoveDamageClassName>}
     * @memberof MoveDamageClassDetail
     */
    names: Array<MoveDamageClassName>;
}
/**
 * 
 * @export
 * @interface MoveDamageClassName
 */
export interface MoveDamageClassName {
    /**
     * 
     * @type {string}
     * @memberof MoveDamageClassName
     */
    name: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof MoveDamageClassName
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface MoveDamageClassSummary
 */
export interface MoveDamageClassSummary {
    /**
     * 
     * @type {string}
     * @memberof MoveDamageClassSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof MoveDamageClassSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface MoveDetail
 */
export interface MoveDetail {
    /**
     * 
     * @type {number}
     * @memberof MoveDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof MoveDetail
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof MoveDetail
     */
    accuracy?: number;
    /**
     * 
     * @type {number}
     * @memberof MoveDetail
     */
    effectChance: number;
    /**
     * 
     * @type {number}
     * @memberof MoveDetail
     */
    pp?: number;
    /**
     * 
     * @type {number}
     * @memberof MoveDetail
     */
    priority?: number;
    /**
     * 
     * @type {number}
     * @memberof MoveDetail
     */
    power?: number;
    /**
     * 
     * @type {MoveDetailContestCombos}
     * @memberof MoveDetail
     */
    contestCombos: MoveDetailContestCombos;
    /**
     * 
     * @type {ContestTypeSummary}
     * @memberof MoveDetail
     */
    contestType: ContestTypeSummary;
    /**
     * 
     * @type {ContestEffectSummary}
     * @memberof MoveDetail
     */
    contestEffect: ContestEffectSummary;
    /**
     * 
     * @type {MoveDamageClassSummary}
     * @memberof MoveDetail
     */
    damageClass: MoveDamageClassSummary;
    /**
     * 
     * @type {Array<MoveChangeEffectEntriesInner>}
     * @memberof MoveDetail
     */
    effectEntries: Array<MoveChangeEffectEntriesInner>;
    /**
     * 
     * @type {Array<MoveDetailEffectChangesInner>}
     * @memberof MoveDetail
     */
    effectChanges: Array<MoveDetailEffectChangesInner>;
    /**
     * 
     * @type {GenerationSummary}
     * @memberof MoveDetail
     */
    generation: GenerationSummary;
    /**
     * 
     * @type {MoveDetailMeta}
     * @memberof MoveDetail
     */
    meta: MoveDetailMeta;
    /**
     * 
     * @type {Array<MoveName>}
     * @memberof MoveDetail
     */
    names: Array<MoveName>;
    /**
     * 
     * @type {Array<MoveChange>}
     * @memberof MoveDetail
     */
    pastValues: Array<MoveChange>;
    /**
     * 
     * @type {Array<MoveDetailStatChangesInner>}
     * @memberof MoveDetail
     */
    statChanges: Array<MoveDetailStatChangesInner>;
    /**
     * 
     * @type {SuperContestEffectSummary}
     * @memberof MoveDetail
     */
    superContestEffect: SuperContestEffectSummary;
    /**
     * 
     * @type {MoveTargetSummary}
     * @memberof MoveDetail
     */
    target: MoveTargetSummary;
    /**
     * 
     * @type {TypeSummary}
     * @memberof MoveDetail
     */
    type: TypeSummary;
    /**
     * 
     * @type {Array<MoveDetailMachinesInner>}
     * @memberof MoveDetail
     */
    machines: Array<MoveDetailMachinesInner>;
    /**
     * 
     * @type {Array<MoveFlavorText>}
     * @memberof MoveDetail
     */
    flavorTextEntries: Array<MoveFlavorText>;
    /**
     * 
     * @type {Array<AbilityDetailPokemonInnerPokemon>}
     * @memberof MoveDetail
     */
    learnedByPokemon: Array<AbilityDetailPokemonInnerPokemon>;
}
/**
 * 
 * @export
 * @interface MoveDetailContestCombos
 */
export interface MoveDetailContestCombos {
    /**
     * 
     * @type {MoveDetailContestCombosNormal}
     * @memberof MoveDetailContestCombos
     */
    normal: MoveDetailContestCombosNormal;
    /**
     * 
     * @type {MoveDetailContestCombosNormal}
     * @memberof MoveDetailContestCombos
     */
    _super: MoveDetailContestCombosNormal;
}
/**
 * 
 * @export
 * @interface MoveDetailContestCombosNormal
 */
export interface MoveDetailContestCombosNormal {
    /**
     * 
     * @type {Array<AbilityDetailPokemonInnerPokemon>}
     * @memberof MoveDetailContestCombosNormal
     */
    useBefore: Array<AbilityDetailPokemonInnerPokemon>;
    /**
     * 
     * @type {Array<AbilityDetailPokemonInnerPokemon>}
     * @memberof MoveDetailContestCombosNormal
     */
    useAfter: Array<AbilityDetailPokemonInnerPokemon>;
}
/**
 * 
 * @export
 * @interface MoveDetailEffectChangesInner
 */
export interface MoveDetailEffectChangesInner {
    /**
     * 
     * @type {Array<MoveDetailEffectChangesInnerEffectEntriesInner>}
     * @memberof MoveDetailEffectChangesInner
     */
    effectEntries: Array<MoveDetailEffectChangesInnerEffectEntriesInner>;
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof MoveDetailEffectChangesInner
     */
    versionGroup: AbilityDetailPokemonInnerPokemon;
}
/**
 * 
 * @export
 * @interface MoveDetailEffectChangesInnerEffectEntriesInner
 */
export interface MoveDetailEffectChangesInnerEffectEntriesInner {
    /**
     * 
     * @type {string}
     * @memberof MoveDetailEffectChangesInnerEffectEntriesInner
     */
    effect: string;
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof MoveDetailEffectChangesInnerEffectEntriesInner
     */
    language: AbilityDetailPokemonInnerPokemon;
}
/**
 * 
 * @export
 * @interface MoveDetailMachinesInner
 */
export interface MoveDetailMachinesInner {
    /**
     * 
     * @type {MoveDetailMachinesInnerMachine}
     * @memberof MoveDetailMachinesInner
     */
    machine: MoveDetailMachinesInnerMachine;
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof MoveDetailMachinesInner
     */
    versionGroup: AbilityDetailPokemonInnerPokemon;
}
/**
 * 
 * @export
 * @interface MoveDetailMachinesInnerMachine
 */
export interface MoveDetailMachinesInnerMachine {
    /**
     * 
     * @type {string}
     * @memberof MoveDetailMachinesInnerMachine
     */
    url: string;
}
/**
 * 
 * @export
 * @interface MoveDetailMeta
 */
export interface MoveDetailMeta {
    /**
     * 
     * @type {MoveMetaAilmentSummary}
     * @memberof MoveDetailMeta
     */
    ailment: MoveMetaAilmentSummary;
    /**
     * 
     * @type {MoveMetaCategorySummary}
     * @memberof MoveDetailMeta
     */
    category: MoveMetaCategorySummary;
    /**
     * 
     * @type {number}
     * @memberof MoveDetailMeta
     */
    minHits?: number;
    /**
     * 
     * @type {number}
     * @memberof MoveDetailMeta
     */
    maxHits?: number;
    /**
     * 
     * @type {number}
     * @memberof MoveDetailMeta
     */
    minTurns?: number;
    /**
     * 
     * @type {number}
     * @memberof MoveDetailMeta
     */
    maxTurns?: number;
    /**
     * 
     * @type {number}
     * @memberof MoveDetailMeta
     */
    drain?: number;
    /**
     * 
     * @type {number}
     * @memberof MoveDetailMeta
     */
    healing?: number;
    /**
     * 
     * @type {number}
     * @memberof MoveDetailMeta
     */
    critRate?: number;
    /**
     * 
     * @type {number}
     * @memberof MoveDetailMeta
     */
    ailmentChance?: number;
    /**
     * 
     * @type {number}
     * @memberof MoveDetailMeta
     */
    flinchChance?: number;
    /**
     * 
     * @type {number}
     * @memberof MoveDetailMeta
     */
    statChance?: number;
}
/**
 * 
 * @export
 * @interface MoveDetailStatChangesInner
 */
export interface MoveDetailStatChangesInner {
    /**
     * 
     * @type {number}
     * @memberof MoveDetailStatChangesInner
     */
    change: number;
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof MoveDetailStatChangesInner
     */
    stat: AbilityDetailPokemonInnerPokemon;
}
/**
 * 
 * @export
 * @interface MoveFlavorText
 */
export interface MoveFlavorText {
    /**
     * 
     * @type {string}
     * @memberof MoveFlavorText
     */
    flavorText: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof MoveFlavorText
     */
    language: LanguageSummary;
    /**
     * 
     * @type {VersionGroupSummary}
     * @memberof MoveFlavorText
     */
    versionGroup: VersionGroupSummary;
}
/**
 * 
 * @export
 * @interface MoveLearnMethodDescription
 */
export interface MoveLearnMethodDescription {
    /**
     * 
     * @type {string}
     * @memberof MoveLearnMethodDescription
     */
    description?: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof MoveLearnMethodDescription
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface MoveLearnMethodDetail
 */
export interface MoveLearnMethodDetail {
    /**
     * 
     * @type {number}
     * @memberof MoveLearnMethodDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof MoveLearnMethodDetail
     */
    name: string;
    /**
     * 
     * @type {Array<MoveLearnMethodName>}
     * @memberof MoveLearnMethodDetail
     */
    names: Array<MoveLearnMethodName>;
    /**
     * 
     * @type {Array<MoveLearnMethodDescription>}
     * @memberof MoveLearnMethodDetail
     */
    descriptions: Array<MoveLearnMethodDescription>;
    /**
     * 
     * @type {Array<AbilityDetailPokemonInnerPokemon>}
     * @memberof MoveLearnMethodDetail
     */
    versionGroups: Array<AbilityDetailPokemonInnerPokemon>;
}
/**
 * 
 * @export
 * @interface MoveLearnMethodName
 */
export interface MoveLearnMethodName {
    /**
     * 
     * @type {string}
     * @memberof MoveLearnMethodName
     */
    name: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof MoveLearnMethodName
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface MoveLearnMethodSummary
 */
export interface MoveLearnMethodSummary {
    /**
     * 
     * @type {string}
     * @memberof MoveLearnMethodSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof MoveLearnMethodSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface MoveMeta
 */
export interface MoveMeta {
    /**
     * 
     * @type {MoveMetaAilmentSummary}
     * @memberof MoveMeta
     */
    ailment: MoveMetaAilmentSummary;
    /**
     * 
     * @type {MoveMetaCategorySummary}
     * @memberof MoveMeta
     */
    category: MoveMetaCategorySummary;
    /**
     * 
     * @type {number}
     * @memberof MoveMeta
     */
    minHits?: number;
    /**
     * 
     * @type {number}
     * @memberof MoveMeta
     */
    maxHits?: number;
    /**
     * 
     * @type {number}
     * @memberof MoveMeta
     */
    minTurns?: number;
    /**
     * 
     * @type {number}
     * @memberof MoveMeta
     */
    maxTurns?: number;
    /**
     * 
     * @type {number}
     * @memberof MoveMeta
     */
    drain?: number;
    /**
     * 
     * @type {number}
     * @memberof MoveMeta
     */
    healing?: number;
    /**
     * 
     * @type {number}
     * @memberof MoveMeta
     */
    critRate?: number;
    /**
     * 
     * @type {number}
     * @memberof MoveMeta
     */
    ailmentChance?: number;
    /**
     * 
     * @type {number}
     * @memberof MoveMeta
     */
    flinchChance?: number;
    /**
     * 
     * @type {number}
     * @memberof MoveMeta
     */
    statChance?: number;
}
/**
 * 
 * @export
 * @interface MoveMetaAilmentDetail
 */
export interface MoveMetaAilmentDetail {
    /**
     * 
     * @type {number}
     * @memberof MoveMetaAilmentDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof MoveMetaAilmentDetail
     */
    name: string;
    /**
     * 
     * @type {Array<AbilityDetailPokemonInnerPokemon>}
     * @memberof MoveMetaAilmentDetail
     */
    moves: Array<AbilityDetailPokemonInnerPokemon>;
    /**
     * 
     * @type {Array<MoveMetaAilmentName>}
     * @memberof MoveMetaAilmentDetail
     */
    names: Array<MoveMetaAilmentName>;
}
/**
 * 
 * @export
 * @interface MoveMetaAilmentName
 */
export interface MoveMetaAilmentName {
    /**
     * 
     * @type {string}
     * @memberof MoveMetaAilmentName
     */
    name: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof MoveMetaAilmentName
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface MoveMetaAilmentSummary
 */
export interface MoveMetaAilmentSummary {
    /**
     * 
     * @type {string}
     * @memberof MoveMetaAilmentSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof MoveMetaAilmentSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface MoveMetaCategoryDescription
 */
export interface MoveMetaCategoryDescription {
    /**
     * 
     * @type {string}
     * @memberof MoveMetaCategoryDescription
     */
    description?: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof MoveMetaCategoryDescription
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface MoveMetaCategoryDetail
 */
export interface MoveMetaCategoryDetail {
    /**
     * 
     * @type {number}
     * @memberof MoveMetaCategoryDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof MoveMetaCategoryDetail
     */
    name: string;
    /**
     * 
     * @type {Array<MoveMetaCategoryDescription>}
     * @memberof MoveMetaCategoryDetail
     */
    descriptions: Array<MoveMetaCategoryDescription>;
    /**
     * 
     * @type {Array<AbilityDetailPokemonInnerPokemon>}
     * @memberof MoveMetaCategoryDetail
     */
    moves: Array<AbilityDetailPokemonInnerPokemon>;
}
/**
 * 
 * @export
 * @interface MoveMetaCategorySummary
 */
export interface MoveMetaCategorySummary {
    /**
     * 
     * @type {string}
     * @memberof MoveMetaCategorySummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof MoveMetaCategorySummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface MoveName
 */
export interface MoveName {
    /**
     * 
     * @type {string}
     * @memberof MoveName
     */
    name: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof MoveName
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface MoveSummary
 */
export interface MoveSummary {
    /**
     * 
     * @type {string}
     * @memberof MoveSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof MoveSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface MoveTargetDescription
 */
export interface MoveTargetDescription {
    /**
     * 
     * @type {string}
     * @memberof MoveTargetDescription
     */
    description?: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof MoveTargetDescription
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface MoveTargetDetail
 */
export interface MoveTargetDetail {
    /**
     * 
     * @type {number}
     * @memberof MoveTargetDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof MoveTargetDetail
     */
    name: string;
    /**
     * 
     * @type {Array<MoveTargetDescription>}
     * @memberof MoveTargetDetail
     */
    descriptions: Array<MoveTargetDescription>;
    /**
     * 
     * @type {Array<MoveSummary>}
     * @memberof MoveTargetDetail
     */
    moves: Array<MoveSummary>;
    /**
     * 
     * @type {Array<MoveTargetName>}
     * @memberof MoveTargetDetail
     */
    names: Array<MoveTargetName>;
}
/**
 * 
 * @export
 * @interface MoveTargetName
 */
export interface MoveTargetName {
    /**
     * 
     * @type {string}
     * @memberof MoveTargetName
     */
    name: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof MoveTargetName
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface MoveTargetSummary
 */
export interface MoveTargetSummary {
    /**
     * 
     * @type {string}
     * @memberof MoveTargetSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof MoveTargetSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface NatureBattleStylePreference
 */
export interface NatureBattleStylePreference {
    /**
     * 
     * @type {number}
     * @memberof NatureBattleStylePreference
     */
    lowHpPreference: number;
    /**
     * 
     * @type {number}
     * @memberof NatureBattleStylePreference
     */
    highHpPreference: number;
    /**
     * 
     * @type {MoveBattleStyleSummary}
     * @memberof NatureBattleStylePreference
     */
    moveBattleStyle: MoveBattleStyleSummary;
}
/**
 * 
 * @export
 * @interface NatureDetail
 */
export interface NatureDetail {
    /**
     * 
     * @type {number}
     * @memberof NatureDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof NatureDetail
     */
    name: string;
    /**
     * 
     * @type {StatSummary}
     * @memberof NatureDetail
     */
    decreasedStat: StatSummary;
    /**
     * 
     * @type {StatSummary}
     * @memberof NatureDetail
     */
    increasedStat: StatSummary;
    /**
     * 
     * @type {BerryFlavorSummary}
     * @memberof NatureDetail
     */
    likesFlavor: BerryFlavorSummary;
    /**
     * 
     * @type {BerryFlavorSummary}
     * @memberof NatureDetail
     */
    hatesFlavor: BerryFlavorSummary;
    /**
     * 
     * @type {Array<BerrySummary>}
     * @memberof NatureDetail
     */
    berries: Array<BerrySummary>;
    /**
     * 
     * @type {Array<NatureDetailPokeathlonStatChangesInner>}
     * @memberof NatureDetail
     */
    pokeathlonStatChanges: Array<NatureDetailPokeathlonStatChangesInner>;
    /**
     * 
     * @type {Array<NatureBattleStylePreference>}
     * @memberof NatureDetail
     */
    moveBattleStylePreferences: Array<NatureBattleStylePreference>;
    /**
     * 
     * @type {Array<NatureName>}
     * @memberof NatureDetail
     */
    names: Array<NatureName>;
}
/**
 * 
 * @export
 * @interface NatureDetailPokeathlonStatChangesInner
 */
export interface NatureDetailPokeathlonStatChangesInner {
    /**
     * 
     * @type {number}
     * @memberof NatureDetailPokeathlonStatChangesInner
     */
    maxChange: number;
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof NatureDetailPokeathlonStatChangesInner
     */
    pokeathlonStat: AbilityDetailPokemonInnerPokemon;
}
/**
 * 
 * @export
 * @interface NatureName
 */
export interface NatureName {
    /**
     * 
     * @type {string}
     * @memberof NatureName
     */
    name: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof NatureName
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface NatureSummary
 */
export interface NatureSummary {
    /**
     * 
     * @type {string}
     * @memberof NatureSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof NatureSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface PaginatedAbilitySummaryList
 */
export interface PaginatedAbilitySummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedAbilitySummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedAbilitySummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedAbilitySummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<AbilitySummary>}
     * @memberof PaginatedAbilitySummaryList
     */
    results?: Array<AbilitySummary>;
}
/**
 * 
 * @export
 * @interface PaginatedBerryFirmnessSummaryList
 */
export interface PaginatedBerryFirmnessSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedBerryFirmnessSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedBerryFirmnessSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedBerryFirmnessSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<BerryFirmnessSummary>}
     * @memberof PaginatedBerryFirmnessSummaryList
     */
    results?: Array<BerryFirmnessSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedBerryFlavorSummaryList
 */
export interface PaginatedBerryFlavorSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedBerryFlavorSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedBerryFlavorSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedBerryFlavorSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<BerryFlavorSummary>}
     * @memberof PaginatedBerryFlavorSummaryList
     */
    results?: Array<BerryFlavorSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedBerrySummaryList
 */
export interface PaginatedBerrySummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedBerrySummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedBerrySummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedBerrySummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<BerrySummary>}
     * @memberof PaginatedBerrySummaryList
     */
    results?: Array<BerrySummary>;
}
/**
 * 
 * @export
 * @interface PaginatedCharacteristicSummaryList
 */
export interface PaginatedCharacteristicSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedCharacteristicSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedCharacteristicSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedCharacteristicSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<CharacteristicSummary>}
     * @memberof PaginatedCharacteristicSummaryList
     */
    results?: Array<CharacteristicSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedContestEffectSummaryList
 */
export interface PaginatedContestEffectSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedContestEffectSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedContestEffectSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedContestEffectSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<ContestEffectSummary>}
     * @memberof PaginatedContestEffectSummaryList
     */
    results?: Array<ContestEffectSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedContestTypeSummaryList
 */
export interface PaginatedContestTypeSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedContestTypeSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedContestTypeSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedContestTypeSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<ContestTypeSummary>}
     * @memberof PaginatedContestTypeSummaryList
     */
    results?: Array<ContestTypeSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedEggGroupSummaryList
 */
export interface PaginatedEggGroupSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedEggGroupSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedEggGroupSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedEggGroupSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<EggGroupSummary>}
     * @memberof PaginatedEggGroupSummaryList
     */
    results?: Array<EggGroupSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedEncounterConditionSummaryList
 */
export interface PaginatedEncounterConditionSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedEncounterConditionSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedEncounterConditionSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedEncounterConditionSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<EncounterConditionSummary>}
     * @memberof PaginatedEncounterConditionSummaryList
     */
    results?: Array<EncounterConditionSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedEncounterConditionValueSummaryList
 */
export interface PaginatedEncounterConditionValueSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedEncounterConditionValueSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedEncounterConditionValueSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedEncounterConditionValueSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<EncounterConditionValueSummary>}
     * @memberof PaginatedEncounterConditionValueSummaryList
     */
    results?: Array<EncounterConditionValueSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedEncounterMethodSummaryList
 */
export interface PaginatedEncounterMethodSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedEncounterMethodSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedEncounterMethodSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedEncounterMethodSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<EncounterMethodSummary>}
     * @memberof PaginatedEncounterMethodSummaryList
     */
    results?: Array<EncounterMethodSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedEvolutionChainSummaryList
 */
export interface PaginatedEvolutionChainSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedEvolutionChainSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedEvolutionChainSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedEvolutionChainSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<EvolutionChainSummary>}
     * @memberof PaginatedEvolutionChainSummaryList
     */
    results?: Array<EvolutionChainSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedEvolutionTriggerSummaryList
 */
export interface PaginatedEvolutionTriggerSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedEvolutionTriggerSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedEvolutionTriggerSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedEvolutionTriggerSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<EvolutionTriggerSummary>}
     * @memberof PaginatedEvolutionTriggerSummaryList
     */
    results?: Array<EvolutionTriggerSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedGenderSummaryList
 */
export interface PaginatedGenderSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedGenderSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedGenderSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedGenderSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<GenderSummary>}
     * @memberof PaginatedGenderSummaryList
     */
    results?: Array<GenderSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedGenerationSummaryList
 */
export interface PaginatedGenerationSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedGenerationSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedGenerationSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedGenerationSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<GenerationSummary>}
     * @memberof PaginatedGenerationSummaryList
     */
    results?: Array<GenerationSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedGrowthRateSummaryList
 */
export interface PaginatedGrowthRateSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedGrowthRateSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedGrowthRateSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedGrowthRateSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<GrowthRateSummary>}
     * @memberof PaginatedGrowthRateSummaryList
     */
    results?: Array<GrowthRateSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedItemAttributeSummaryList
 */
export interface PaginatedItemAttributeSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedItemAttributeSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedItemAttributeSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedItemAttributeSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<ItemAttributeSummary>}
     * @memberof PaginatedItemAttributeSummaryList
     */
    results?: Array<ItemAttributeSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedItemCategorySummaryList
 */
export interface PaginatedItemCategorySummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedItemCategorySummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedItemCategorySummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedItemCategorySummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<ItemCategorySummary>}
     * @memberof PaginatedItemCategorySummaryList
     */
    results?: Array<ItemCategorySummary>;
}
/**
 * 
 * @export
 * @interface PaginatedItemFlingEffectSummaryList
 */
export interface PaginatedItemFlingEffectSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedItemFlingEffectSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedItemFlingEffectSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedItemFlingEffectSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<ItemFlingEffectSummary>}
     * @memberof PaginatedItemFlingEffectSummaryList
     */
    results?: Array<ItemFlingEffectSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedItemPocketSummaryList
 */
export interface PaginatedItemPocketSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedItemPocketSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedItemPocketSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedItemPocketSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<ItemPocketSummary>}
     * @memberof PaginatedItemPocketSummaryList
     */
    results?: Array<ItemPocketSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedItemSummaryList
 */
export interface PaginatedItemSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedItemSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedItemSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedItemSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<ItemSummary>}
     * @memberof PaginatedItemSummaryList
     */
    results?: Array<ItemSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedLanguageSummaryList
 */
export interface PaginatedLanguageSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedLanguageSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedLanguageSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedLanguageSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<LanguageSummary>}
     * @memberof PaginatedLanguageSummaryList
     */
    results?: Array<LanguageSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedLocationAreaSummaryList
 */
export interface PaginatedLocationAreaSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedLocationAreaSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedLocationAreaSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedLocationAreaSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<LocationAreaSummary>}
     * @memberof PaginatedLocationAreaSummaryList
     */
    results?: Array<LocationAreaSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedLocationSummaryList
 */
export interface PaginatedLocationSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedLocationSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedLocationSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedLocationSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<LocationSummary>}
     * @memberof PaginatedLocationSummaryList
     */
    results?: Array<LocationSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedMachineSummaryList
 */
export interface PaginatedMachineSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedMachineSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedMachineSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedMachineSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<MachineSummary>}
     * @memberof PaginatedMachineSummaryList
     */
    results?: Array<MachineSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedMoveBattleStyleSummaryList
 */
export interface PaginatedMoveBattleStyleSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedMoveBattleStyleSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedMoveBattleStyleSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedMoveBattleStyleSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<MoveBattleStyleSummary>}
     * @memberof PaginatedMoveBattleStyleSummaryList
     */
    results?: Array<MoveBattleStyleSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedMoveDamageClassSummaryList
 */
export interface PaginatedMoveDamageClassSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedMoveDamageClassSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedMoveDamageClassSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedMoveDamageClassSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<MoveDamageClassSummary>}
     * @memberof PaginatedMoveDamageClassSummaryList
     */
    results?: Array<MoveDamageClassSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedMoveLearnMethodSummaryList
 */
export interface PaginatedMoveLearnMethodSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedMoveLearnMethodSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedMoveLearnMethodSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedMoveLearnMethodSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<MoveLearnMethodSummary>}
     * @memberof PaginatedMoveLearnMethodSummaryList
     */
    results?: Array<MoveLearnMethodSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedMoveMetaAilmentSummaryList
 */
export interface PaginatedMoveMetaAilmentSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedMoveMetaAilmentSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedMoveMetaAilmentSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedMoveMetaAilmentSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<MoveMetaAilmentSummary>}
     * @memberof PaginatedMoveMetaAilmentSummaryList
     */
    results?: Array<MoveMetaAilmentSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedMoveMetaCategorySummaryList
 */
export interface PaginatedMoveMetaCategorySummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedMoveMetaCategorySummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedMoveMetaCategorySummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedMoveMetaCategorySummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<MoveMetaCategorySummary>}
     * @memberof PaginatedMoveMetaCategorySummaryList
     */
    results?: Array<MoveMetaCategorySummary>;
}
/**
 * 
 * @export
 * @interface PaginatedMoveSummaryList
 */
export interface PaginatedMoveSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedMoveSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedMoveSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedMoveSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<MoveSummary>}
     * @memberof PaginatedMoveSummaryList
     */
    results?: Array<MoveSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedMoveTargetSummaryList
 */
export interface PaginatedMoveTargetSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedMoveTargetSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedMoveTargetSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedMoveTargetSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<MoveTargetSummary>}
     * @memberof PaginatedMoveTargetSummaryList
     */
    results?: Array<MoveTargetSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedNatureSummaryList
 */
export interface PaginatedNatureSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedNatureSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedNatureSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedNatureSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<NatureSummary>}
     * @memberof PaginatedNatureSummaryList
     */
    results?: Array<NatureSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedPalParkAreaSummaryList
 */
export interface PaginatedPalParkAreaSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedPalParkAreaSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedPalParkAreaSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedPalParkAreaSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<PalParkAreaSummary>}
     * @memberof PaginatedPalParkAreaSummaryList
     */
    results?: Array<PalParkAreaSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedPokeathlonStatSummaryList
 */
export interface PaginatedPokeathlonStatSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedPokeathlonStatSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedPokeathlonStatSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedPokeathlonStatSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<PokeathlonStatSummary>}
     * @memberof PaginatedPokeathlonStatSummaryList
     */
    results?: Array<PokeathlonStatSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedPokedexSummaryList
 */
export interface PaginatedPokedexSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedPokedexSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedPokedexSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedPokedexSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<PokedexSummary>}
     * @memberof PaginatedPokedexSummaryList
     */
    results?: Array<PokedexSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedPokemonColorSummaryList
 */
export interface PaginatedPokemonColorSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedPokemonColorSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedPokemonColorSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedPokemonColorSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<PokemonColorSummary>}
     * @memberof PaginatedPokemonColorSummaryList
     */
    results?: Array<PokemonColorSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedPokemonFormSummaryList
 */
export interface PaginatedPokemonFormSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedPokemonFormSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedPokemonFormSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedPokemonFormSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<PokemonFormSummary>}
     * @memberof PaginatedPokemonFormSummaryList
     */
    results?: Array<PokemonFormSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedPokemonHabitatSummaryList
 */
export interface PaginatedPokemonHabitatSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedPokemonHabitatSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedPokemonHabitatSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedPokemonHabitatSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<PokemonHabitatSummary>}
     * @memberof PaginatedPokemonHabitatSummaryList
     */
    results?: Array<PokemonHabitatSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedPokemonShapeSummaryList
 */
export interface PaginatedPokemonShapeSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedPokemonShapeSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedPokemonShapeSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedPokemonShapeSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<PokemonShapeSummary>}
     * @memberof PaginatedPokemonShapeSummaryList
     */
    results?: Array<PokemonShapeSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedPokemonSpeciesSummaryList
 */
export interface PaginatedPokemonSpeciesSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedPokemonSpeciesSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedPokemonSpeciesSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedPokemonSpeciesSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<PokemonSpeciesSummary>}
     * @memberof PaginatedPokemonSpeciesSummaryList
     */
    results?: Array<PokemonSpeciesSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedPokemonSummaryList
 */
export interface PaginatedPokemonSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedPokemonSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedPokemonSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedPokemonSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<PokemonSummary>}
     * @memberof PaginatedPokemonSummaryList
     */
    results?: Array<PokemonSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedRegionSummaryList
 */
export interface PaginatedRegionSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedRegionSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedRegionSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedRegionSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<RegionSummary>}
     * @memberof PaginatedRegionSummaryList
     */
    results?: Array<RegionSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedStatSummaryList
 */
export interface PaginatedStatSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedStatSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedStatSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedStatSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<StatSummary>}
     * @memberof PaginatedStatSummaryList
     */
    results?: Array<StatSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedSuperContestEffectSummaryList
 */
export interface PaginatedSuperContestEffectSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedSuperContestEffectSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedSuperContestEffectSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedSuperContestEffectSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<SuperContestEffectSummary>}
     * @memberof PaginatedSuperContestEffectSummaryList
     */
    results?: Array<SuperContestEffectSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedTypeSummaryList
 */
export interface PaginatedTypeSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedTypeSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedTypeSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedTypeSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<TypeSummary>}
     * @memberof PaginatedTypeSummaryList
     */
    results?: Array<TypeSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedVersionGroupSummaryList
 */
export interface PaginatedVersionGroupSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedVersionGroupSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedVersionGroupSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedVersionGroupSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<VersionGroupSummary>}
     * @memberof PaginatedVersionGroupSummaryList
     */
    results?: Array<VersionGroupSummary>;
}
/**
 * 
 * @export
 * @interface PaginatedVersionSummaryList
 */
export interface PaginatedVersionSummaryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedVersionSummaryList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedVersionSummaryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedVersionSummaryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<VersionSummary>}
     * @memberof PaginatedVersionSummaryList
     */
    results?: Array<VersionSummary>;
}
/**
 * 
 * @export
 * @interface PalParkAreaDetail
 */
export interface PalParkAreaDetail {
    /**
     * 
     * @type {number}
     * @memberof PalParkAreaDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof PalParkAreaDetail
     */
    name: string;
    /**
     * 
     * @type {Array<PalParkAreaName>}
     * @memberof PalParkAreaDetail
     */
    names: Array<PalParkAreaName>;
    /**
     * 
     * @type {Array<PalParkAreaDetailPokemonEncountersInner>}
     * @memberof PalParkAreaDetail
     */
    pokemonEncounters: Array<PalParkAreaDetailPokemonEncountersInner>;
}
/**
 * 
 * @export
 * @interface PalParkAreaDetailPokemonEncountersInner
 */
export interface PalParkAreaDetailPokemonEncountersInner {
    /**
     * 
     * @type {number}
     * @memberof PalParkAreaDetailPokemonEncountersInner
     */
    baseScore: number;
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof PalParkAreaDetailPokemonEncountersInner
     */
    pokemonSpecies: AbilityDetailPokemonInnerPokemon;
    /**
     * 
     * @type {number}
     * @memberof PalParkAreaDetailPokemonEncountersInner
     */
    rate: number;
}
/**
 * 
 * @export
 * @interface PalParkAreaName
 */
export interface PalParkAreaName {
    /**
     * 
     * @type {string}
     * @memberof PalParkAreaName
     */
    name: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof PalParkAreaName
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface PalParkAreaSummary
 */
export interface PalParkAreaSummary {
    /**
     * 
     * @type {string}
     * @memberof PalParkAreaSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PalParkAreaSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface PokeathlonStatDetail
 */
export interface PokeathlonStatDetail {
    /**
     * 
     * @type {number}
     * @memberof PokeathlonStatDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof PokeathlonStatDetail
     */
    name: string;
    /**
     * 
     * @type {PokeathlonStatDetailAffectingNatures}
     * @memberof PokeathlonStatDetail
     */
    affectingNatures: PokeathlonStatDetailAffectingNatures;
    /**
     * 
     * @type {Array<PokeathlonStatName>}
     * @memberof PokeathlonStatDetail
     */
    names: Array<PokeathlonStatName>;
}
/**
 * 
 * @export
 * @interface PokeathlonStatDetailAffectingNatures
 */
export interface PokeathlonStatDetailAffectingNatures {
    /**
     * 
     * @type {Array<PokeathlonStatDetailAffectingNaturesDecreaseInner>}
     * @memberof PokeathlonStatDetailAffectingNatures
     */
    decrease: Array<PokeathlonStatDetailAffectingNaturesDecreaseInner>;
    /**
     * 
     * @type {Array<PokeathlonStatDetailAffectingNaturesIncreaseInner>}
     * @memberof PokeathlonStatDetailAffectingNatures
     */
    increase: Array<PokeathlonStatDetailAffectingNaturesIncreaseInner>;
}
/**
 * 
 * @export
 * @interface PokeathlonStatDetailAffectingNaturesDecreaseInner
 */
export interface PokeathlonStatDetailAffectingNaturesDecreaseInner {
    /**
     * 
     * @type {number}
     * @memberof PokeathlonStatDetailAffectingNaturesDecreaseInner
     */
    maxChange: number;
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof PokeathlonStatDetailAffectingNaturesDecreaseInner
     */
    nature: AbilityDetailPokemonInnerPokemon;
}
/**
 * 
 * @export
 * @interface PokeathlonStatDetailAffectingNaturesIncreaseInner
 */
export interface PokeathlonStatDetailAffectingNaturesIncreaseInner {
    /**
     * 
     * @type {number}
     * @memberof PokeathlonStatDetailAffectingNaturesIncreaseInner
     */
    maxChange: number;
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof PokeathlonStatDetailAffectingNaturesIncreaseInner
     */
    nature: AbilityDetailPokemonInnerPokemon;
}
/**
 * 
 * @export
 * @interface PokeathlonStatName
 */
export interface PokeathlonStatName {
    /**
     * 
     * @type {string}
     * @memberof PokeathlonStatName
     */
    name: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof PokeathlonStatName
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface PokeathlonStatSummary
 */
export interface PokeathlonStatSummary {
    /**
     * 
     * @type {string}
     * @memberof PokeathlonStatSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PokeathlonStatSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface PokedexDescription
 */
export interface PokedexDescription {
    /**
     * 
     * @type {string}
     * @memberof PokedexDescription
     */
    description?: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof PokedexDescription
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface PokedexDetail
 */
export interface PokedexDetail {
    /**
     * 
     * @type {number}
     * @memberof PokedexDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof PokedexDetail
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof PokedexDetail
     */
    isMainSeries?: boolean;
    /**
     * 
     * @type {Array<PokedexDescription>}
     * @memberof PokedexDetail
     */
    descriptions: Array<PokedexDescription>;
    /**
     * 
     * @type {Array<PokedexName>}
     * @memberof PokedexDetail
     */
    names: Array<PokedexName>;
    /**
     * 
     * @type {Array<PokedexDetailPokemonEntriesInner>}
     * @memberof PokedexDetail
     */
    pokemonEntries: Array<PokedexDetailPokemonEntriesInner>;
    /**
     * 
     * @type {RegionSummary}
     * @memberof PokedexDetail
     */
    region: RegionSummary;
    /**
     * 
     * @type {Array<AbilityDetailPokemonInnerPokemon>}
     * @memberof PokedexDetail
     */
    versionGroups: Array<AbilityDetailPokemonInnerPokemon>;
}
/**
 * 
 * @export
 * @interface PokedexDetailPokemonEntriesInner
 */
export interface PokedexDetailPokemonEntriesInner {
    /**
     * 
     * @type {number}
     * @memberof PokedexDetailPokemonEntriesInner
     */
    entryNumber: number;
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof PokedexDetailPokemonEntriesInner
     */
    pokemonSpecies: AbilityDetailPokemonInnerPokemon;
}
/**
 * 
 * @export
 * @interface PokedexName
 */
export interface PokedexName {
    /**
     * 
     * @type {string}
     * @memberof PokedexName
     */
    name: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof PokedexName
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface PokedexSummary
 */
export interface PokedexSummary {
    /**
     * 
     * @type {string}
     * @memberof PokedexSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PokedexSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface PokemonColorDetail
 */
export interface PokemonColorDetail {
    /**
     * 
     * @type {number}
     * @memberof PokemonColorDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof PokemonColorDetail
     */
    name: string;
    /**
     * 
     * @type {Array<PokemonColorName>}
     * @memberof PokemonColorDetail
     */
    names: Array<PokemonColorName>;
    /**
     * 
     * @type {Array<PokemonSpeciesSummary>}
     * @memberof PokemonColorDetail
     */
    pokemonSpecies: Array<PokemonSpeciesSummary>;
}
/**
 * 
 * @export
 * @interface PokemonColorName
 */
export interface PokemonColorName {
    /**
     * 
     * @type {string}
     * @memberof PokemonColorName
     */
    name: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof PokemonColorName
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface PokemonColorSummary
 */
export interface PokemonColorSummary {
    /**
     * 
     * @type {string}
     * @memberof PokemonColorSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PokemonColorSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface PokemonDetail
 */
export interface PokemonDetail {
    /**
     * 
     * @type {number}
     * @memberof PokemonDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof PokemonDetail
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof PokemonDetail
     */
    baseExperience?: number;
    /**
     * 
     * @type {number}
     * @memberof PokemonDetail
     */
    height?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PokemonDetail
     */
    isDefault?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PokemonDetail
     */
    order?: number;
    /**
     * 
     * @type {number}
     * @memberof PokemonDetail
     */
    weight?: number;
    /**
     * 
     * @type {Array<PokemonDetailAbilitiesInner>}
     * @memberof PokemonDetail
     */
    abilities: Array<PokemonDetailAbilitiesInner>;
    /**
     * 
     * @type {Array<PokemonDetailPastAbilitiesInner>}
     * @memberof PokemonDetail
     */
    pastAbilities: Array<PokemonDetailPastAbilitiesInner>;
    /**
     * 
     * @type {Array<PokemonFormSummary>}
     * @memberof PokemonDetail
     */
    forms: Array<PokemonFormSummary>;
    /**
     * 
     * @type {Array<PokemonGameIndex>}
     * @memberof PokemonDetail
     */
    gameIndices: Array<PokemonGameIndex>;
    /**
     * 
     * @type {PokemonDetailHeldItems}
     * @memberof PokemonDetail
     */
    heldItems: PokemonDetailHeldItems;
    /**
     * 
     * @type {string}
     * @memberof PokemonDetail
     */
    readonly locationAreaEncounters: string;
    /**
     * 
     * @type {Array<PokemonDetailMovesInner>}
     * @memberof PokemonDetail
     */
    moves: Array<PokemonDetailMovesInner>;
    /**
     * 
     * @type {PokemonSpeciesSummary}
     * @memberof PokemonDetail
     */
    species: PokemonSpeciesSummary;
    /**
     * 
     * @type {PokemonDetailSprites}
     * @memberof PokemonDetail
     */
    sprites: PokemonDetailSprites;
    /**
     * 
     * @type {PokemonDetailCries}
     * @memberof PokemonDetail
     */
    cries: PokemonDetailCries;
    /**
     * 
     * @type {Array<PokemonStat>}
     * @memberof PokemonDetail
     */
    stats: Array<PokemonStat>;
    /**
     * 
     * @type {Array<PokemonDetailTypesInner>}
     * @memberof PokemonDetail
     */
    types: Array<PokemonDetailTypesInner>;
    /**
     * 
     * @type {Array<PokemonDetailPastTypesInner>}
     * @memberof PokemonDetail
     */
    pastTypes: Array<PokemonDetailPastTypesInner>;
}
/**
 * 
 * @export
 * @interface PokemonDetailAbilitiesInner
 */
export interface PokemonDetailAbilitiesInner {
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof PokemonDetailAbilitiesInner
     */
    ability: AbilityDetailPokemonInnerPokemon;
    /**
     * 
     * @type {boolean}
     * @memberof PokemonDetailAbilitiesInner
     */
    isHidden: boolean;
    /**
     * 
     * @type {number}
     * @memberof PokemonDetailAbilitiesInner
     */
    slot: number;
}
/**
 * 
 * @export
 * @interface PokemonDetailCries
 */
export interface PokemonDetailCries {
    /**
     * 
     * @type {string}
     * @memberof PokemonDetailCries
     */
    latest: string;
    /**
     * 
     * @type {string}
     * @memberof PokemonDetailCries
     */
    legacy: string;
}
/**
 * 
 * @export
 * @interface PokemonDetailHeldItems
 */
export interface PokemonDetailHeldItems {
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof PokemonDetailHeldItems
     */
    item: AbilityDetailPokemonInnerPokemon;
    /**
     * 
     * @type {Array<ItemDetailHeldByPokemonInnerVersionDetailsInner>}
     * @memberof PokemonDetailHeldItems
     */
    versionDetails: Array<ItemDetailHeldByPokemonInnerVersionDetailsInner>;
}
/**
 * 
 * @export
 * @interface PokemonDetailMovesInner
 */
export interface PokemonDetailMovesInner {
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof PokemonDetailMovesInner
     */
    move: AbilityDetailPokemonInnerPokemon;
    /**
     * 
     * @type {Array<PokemonDetailMovesInnerVersionGroupDetailsInner>}
     * @memberof PokemonDetailMovesInner
     */
    versionGroupDetails: Array<PokemonDetailMovesInnerVersionGroupDetailsInner>;
}
/**
 * 
 * @export
 * @interface PokemonDetailMovesInnerVersionGroupDetailsInner
 */
export interface PokemonDetailMovesInnerVersionGroupDetailsInner {
    /**
     * 
     * @type {number}
     * @memberof PokemonDetailMovesInnerVersionGroupDetailsInner
     */
    levelLearnedAt: number;
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof PokemonDetailMovesInnerVersionGroupDetailsInner
     */
    moveLearnMethod: AbilityDetailPokemonInnerPokemon;
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof PokemonDetailMovesInnerVersionGroupDetailsInner
     */
    versionGroup: AbilityDetailPokemonInnerPokemon;
}
/**
 * 
 * @export
 * @interface PokemonDetailPastAbilitiesInner
 */
export interface PokemonDetailPastAbilitiesInner {
    /**
     * 
     * @type {Array<PokemonDetailAbilitiesInner>}
     * @memberof PokemonDetailPastAbilitiesInner
     */
    abilities: Array<PokemonDetailAbilitiesInner>;
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof PokemonDetailPastAbilitiesInner
     */
    generation: AbilityDetailPokemonInnerPokemon;
}
/**
 * 
 * @export
 * @interface PokemonDetailPastTypesInner
 */
export interface PokemonDetailPastTypesInner {
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof PokemonDetailPastTypesInner
     */
    generation: AbilityDetailPokemonInnerPokemon;
    /**
     * 
     * @type {Array<PokemonDetailTypesInner>}
     * @memberof PokemonDetailPastTypesInner
     */
    types: Array<PokemonDetailTypesInner>;
}
/**
 * 
 * @export
 * @interface PokemonDetailSprites
 */
export interface PokemonDetailSprites {
    [key: string]: string | any;
    /**
     * 
     * @type {string}
     * @memberof PokemonDetailSprites
     */
    frontDefault?: string;
}
/**
 * 
 * @export
 * @interface PokemonDetailTypesInner
 */
export interface PokemonDetailTypesInner {
    /**
     * 
     * @type {number}
     * @memberof PokemonDetailTypesInner
     */
    slot: number;
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof PokemonDetailTypesInner
     */
    type: AbilityDetailPokemonInnerPokemon;
}
/**
 * 
 * @export
 * @interface PokemonDexEntry
 */
export interface PokemonDexEntry {
    /**
     * 
     * @type {number}
     * @memberof PokemonDexEntry
     */
    entryNumber: number;
    /**
     * 
     * @type {PokedexSummary}
     * @memberof PokemonDexEntry
     */
    pokedex: PokedexSummary;
}
/**
 * 
 * @export
 * @interface PokemonEncountersRetrieve200ResponseInner
 */
export interface PokemonEncountersRetrieve200ResponseInner {
    /**
     * 
     * @type {PokemonEncountersRetrieve200ResponseInnerLocationArea}
     * @memberof PokemonEncountersRetrieve200ResponseInner
     */
    locationArea: PokemonEncountersRetrieve200ResponseInnerLocationArea;
    /**
     * 
     * @type {Array<PokemonEncountersRetrieve200ResponseInnerVersionDetailsInner>}
     * @memberof PokemonEncountersRetrieve200ResponseInner
     */
    versionDetails: Array<PokemonEncountersRetrieve200ResponseInnerVersionDetailsInner>;
}
/**
 * 
 * @export
 * @interface PokemonEncountersRetrieve200ResponseInnerLocationArea
 */
export interface PokemonEncountersRetrieve200ResponseInnerLocationArea {
    /**
     * 
     * @type {string}
     * @memberof PokemonEncountersRetrieve200ResponseInnerLocationArea
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PokemonEncountersRetrieve200ResponseInnerLocationArea
     */
    url: string;
}
/**
 * 
 * @export
 * @interface PokemonEncountersRetrieve200ResponseInnerVersionDetailsInner
 */
export interface PokemonEncountersRetrieve200ResponseInnerVersionDetailsInner {
    /**
     * 
     * @type {Array<PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerEncounterDetailsInner>}
     * @memberof PokemonEncountersRetrieve200ResponseInnerVersionDetailsInner
     */
    encounterDetails: Array<PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerEncounterDetailsInner>;
    /**
     * 
     * @type {number}
     * @memberof PokemonEncountersRetrieve200ResponseInnerVersionDetailsInner
     */
    maxChance: number;
    /**
     * 
     * @type {PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerVersion}
     * @memberof PokemonEncountersRetrieve200ResponseInnerVersionDetailsInner
     */
    version: PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerVersion;
}
/**
 * 
 * @export
 * @interface PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerEncounterDetailsInner
 */
export interface PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerEncounterDetailsInner {
    /**
     * 
     * @type {number}
     * @memberof PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerEncounterDetailsInner
     */
    chance: number;
    /**
     * 
     * @type {Array<PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerEncounterDetailsInnerConditionValuesInner>}
     * @memberof PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerEncounterDetailsInner
     */
    conditionValues: Array<PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerEncounterDetailsInnerConditionValuesInner>;
    /**
     * 
     * @type {number}
     * @memberof PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerEncounterDetailsInner
     */
    maxLevel: number;
    /**
     * 
     * @type {PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerEncounterDetailsInnerMethod}
     * @memberof PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerEncounterDetailsInner
     */
    method: PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerEncounterDetailsInnerMethod;
    /**
     * 
     * @type {number}
     * @memberof PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerEncounterDetailsInner
     */
    minLevel: number;
}
/**
 * 
 * @export
 * @interface PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerEncounterDetailsInnerConditionValuesInner
 */
export interface PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerEncounterDetailsInnerConditionValuesInner {
    /**
     * 
     * @type {string}
     * @memberof PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerEncounterDetailsInnerConditionValuesInner
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerEncounterDetailsInnerConditionValuesInner
     */
    url: string;
}
/**
 * 
 * @export
 * @interface PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerEncounterDetailsInnerMethod
 */
export interface PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerEncounterDetailsInnerMethod {
    /**
     * 
     * @type {string}
     * @memberof PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerEncounterDetailsInnerMethod
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerEncounterDetailsInnerMethod
     */
    url: string;
}
/**
 * 
 * @export
 * @interface PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerVersion
 */
export interface PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerVersion {
    /**
     * 
     * @type {string}
     * @memberof PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerVersion
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PokemonEncountersRetrieve200ResponseInnerVersionDetailsInnerVersion
     */
    url: string;
}
/**
 * 
 * @export
 * @interface PokemonFormDetail
 */
export interface PokemonFormDetail {
    /**
     * 
     * @type {number}
     * @memberof PokemonFormDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof PokemonFormDetail
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof PokemonFormDetail
     */
    order?: number;
    /**
     * 
     * @type {number}
     * @memberof PokemonFormDetail
     */
    formOrder?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PokemonFormDetail
     */
    isDefault?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PokemonFormDetail
     */
    isBattleOnly?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PokemonFormDetail
     */
    isMega?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PokemonFormDetail
     */
    formName: string;
    /**
     * 
     * @type {PokemonSummary}
     * @memberof PokemonFormDetail
     */
    pokemon: PokemonSummary;
    /**
     * 
     * @type {PokemonFormDetailSprites}
     * @memberof PokemonFormDetail
     */
    sprites: PokemonFormDetailSprites;
    /**
     * 
     * @type {VersionGroupSummary}
     * @memberof PokemonFormDetail
     */
    versionGroup: VersionGroupSummary;
    /**
     * 
     * @type {Array<PokemonFormDetailFormNamesInner>}
     * @memberof PokemonFormDetail
     */
    formNames: Array<PokemonFormDetailFormNamesInner>;
    /**
     * 
     * @type {Array<PokemonFormDetailFormNamesInner>}
     * @memberof PokemonFormDetail
     */
    names: Array<PokemonFormDetailFormNamesInner>;
    /**
     * 
     * @type {Array<PokemonDetailTypesInner>}
     * @memberof PokemonFormDetail
     */
    types: Array<PokemonDetailTypesInner>;
}
/**
 * 
 * @export
 * @interface PokemonFormDetailFormNamesInner
 */
export interface PokemonFormDetailFormNamesInner {
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof PokemonFormDetailFormNamesInner
     */
    language: AbilityDetailPokemonInnerPokemon;
    /**
     * 
     * @type {string}
     * @memberof PokemonFormDetailFormNamesInner
     */
    name: string;
}
/**
 * 
 * @export
 * @interface PokemonFormDetailSprites
 */
export interface PokemonFormDetailSprites {
    [key: string]: string | any;
    /**
     * 
     * @type {string}
     * @memberof PokemonFormDetailSprites
     */
    _default?: string;
}
/**
 * 
 * @export
 * @interface PokemonFormSummary
 */
export interface PokemonFormSummary {
    /**
     * 
     * @type {string}
     * @memberof PokemonFormSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PokemonFormSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface PokemonGameIndex
 */
export interface PokemonGameIndex {
    /**
     * 
     * @type {number}
     * @memberof PokemonGameIndex
     */
    gameIndex: number;
    /**
     * 
     * @type {VersionSummary}
     * @memberof PokemonGameIndex
     */
    version: VersionSummary;
}
/**
 * 
 * @export
 * @interface PokemonHabitatDetail
 */
export interface PokemonHabitatDetail {
    /**
     * 
     * @type {number}
     * @memberof PokemonHabitatDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof PokemonHabitatDetail
     */
    name: string;
    /**
     * 
     * @type {Array<PokemonHabitatName>}
     * @memberof PokemonHabitatDetail
     */
    names: Array<PokemonHabitatName>;
    /**
     * 
     * @type {Array<PokemonSpeciesSummary>}
     * @memberof PokemonHabitatDetail
     */
    pokemonSpecies: Array<PokemonSpeciesSummary>;
}
/**
 * 
 * @export
 * @interface PokemonHabitatName
 */
export interface PokemonHabitatName {
    /**
     * 
     * @type {string}
     * @memberof PokemonHabitatName
     */
    name: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof PokemonHabitatName
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface PokemonHabitatSummary
 */
export interface PokemonHabitatSummary {
    /**
     * 
     * @type {string}
     * @memberof PokemonHabitatSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PokemonHabitatSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface PokemonShapeDetail
 */
export interface PokemonShapeDetail {
    /**
     * 
     * @type {number}
     * @memberof PokemonShapeDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof PokemonShapeDetail
     */
    name: string;
    /**
     * 
     * @type {Array<PokemonShapeDetailAwesomeNamesInner>}
     * @memberof PokemonShapeDetail
     */
    awesomeNames: Array<PokemonShapeDetailAwesomeNamesInner>;
    /**
     * 
     * @type {Array<PokemonShapeDetailNamesInner>}
     * @memberof PokemonShapeDetail
     */
    names: Array<PokemonShapeDetailNamesInner>;
    /**
     * 
     * @type {Array<PokemonSpeciesSummary>}
     * @memberof PokemonShapeDetail
     */
    pokemonSpecies: Array<PokemonSpeciesSummary>;
}
/**
 * 
 * @export
 * @interface PokemonShapeDetailAwesomeNamesInner
 */
export interface PokemonShapeDetailAwesomeNamesInner {
    /**
     * 
     * @type {string}
     * @memberof PokemonShapeDetailAwesomeNamesInner
     */
    awesomeName: string;
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof PokemonShapeDetailAwesomeNamesInner
     */
    language: AbilityDetailPokemonInnerPokemon;
}
/**
 * 
 * @export
 * @interface PokemonShapeDetailNamesInner
 */
export interface PokemonShapeDetailNamesInner {
    /**
     * 
     * @type {string}
     * @memberof PokemonShapeDetailNamesInner
     */
    url: string;
    /**
     * 
     * @type {string}
     * @memberof PokemonShapeDetailNamesInner
     */
    name: string;
}
/**
 * 
 * @export
 * @interface PokemonShapeSummary
 */
export interface PokemonShapeSummary {
    /**
     * 
     * @type {string}
     * @memberof PokemonShapeSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PokemonShapeSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface PokemonSpeciesDescription
 */
export interface PokemonSpeciesDescription {
    /**
     * 
     * @type {string}
     * @memberof PokemonSpeciesDescription
     */
    description?: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof PokemonSpeciesDescription
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface PokemonSpeciesDetail
 */
export interface PokemonSpeciesDetail {
    /**
     * 
     * @type {number}
     * @memberof PokemonSpeciesDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof PokemonSpeciesDetail
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof PokemonSpeciesDetail
     */
    order?: number;
    /**
     * 
     * @type {number}
     * @memberof PokemonSpeciesDetail
     */
    genderRate?: number;
    /**
     * 
     * @type {number}
     * @memberof PokemonSpeciesDetail
     */
    captureRate?: number;
    /**
     * 
     * @type {number}
     * @memberof PokemonSpeciesDetail
     */
    baseHappiness?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PokemonSpeciesDetail
     */
    isBaby?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PokemonSpeciesDetail
     */
    isLegendary?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PokemonSpeciesDetail
     */
    isMythical?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PokemonSpeciesDetail
     */
    hatchCounter?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PokemonSpeciesDetail
     */
    hasGenderDifferences?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PokemonSpeciesDetail
     */
    formsSwitchable?: boolean;
    /**
     * 
     * @type {GrowthRateSummary}
     * @memberof PokemonSpeciesDetail
     */
    growthRate: GrowthRateSummary;
    /**
     * 
     * @type {Array<PokemonDexEntry>}
     * @memberof PokemonSpeciesDetail
     */
    pokedexNumbers: Array<PokemonDexEntry>;
    /**
     * 
     * @type {Array<AbilityDetailPokemonInnerPokemon>}
     * @memberof PokemonSpeciesDetail
     */
    eggGroups: Array<AbilityDetailPokemonInnerPokemon>;
    /**
     * 
     * @type {PokemonColorSummary}
     * @memberof PokemonSpeciesDetail
     */
    color: PokemonColorSummary;
    /**
     * 
     * @type {PokemonShapeSummary}
     * @memberof PokemonSpeciesDetail
     */
    shape: PokemonShapeSummary;
    /**
     * 
     * @type {PokemonSpeciesSummary}
     * @memberof PokemonSpeciesDetail
     */
    evolvesFromSpecies: PokemonSpeciesSummary;
    /**
     * 
     * @type {EvolutionChainSummary}
     * @memberof PokemonSpeciesDetail
     */
    evolutionChain: EvolutionChainSummary;
    /**
     * 
     * @type {PokemonHabitatSummary}
     * @memberof PokemonSpeciesDetail
     */
    habitat: PokemonHabitatSummary;
    /**
     * 
     * @type {GenerationSummary}
     * @memberof PokemonSpeciesDetail
     */
    generation: GenerationSummary;
    /**
     * 
     * @type {Array<PokemonFormDetailFormNamesInner>}
     * @memberof PokemonSpeciesDetail
     */
    names: Array<PokemonFormDetailFormNamesInner>;
    /**
     * 
     * @type {Array<PokemonSpeciesDetailPalParkEncountersInner>}
     * @memberof PokemonSpeciesDetail
     */
    palParkEncounters: Array<PokemonSpeciesDetailPalParkEncountersInner>;
    /**
     * 
     * @type {Array<PokemonSpeciesDescription>}
     * @memberof PokemonSpeciesDetail
     */
    formDescriptions: Array<PokemonSpeciesDescription>;
    /**
     * 
     * @type {Array<PokemonSpeciesFlavorText>}
     * @memberof PokemonSpeciesDetail
     */
    flavorTextEntries: Array<PokemonSpeciesFlavorText>;
    /**
     * 
     * @type {Array<PokemonSpeciesDetailGeneraInner>}
     * @memberof PokemonSpeciesDetail
     */
    genera: Array<PokemonSpeciesDetailGeneraInner>;
    /**
     * 
     * @type {Array<PokemonSpeciesDetailVarietiesInner>}
     * @memberof PokemonSpeciesDetail
     */
    varieties: Array<PokemonSpeciesDetailVarietiesInner>;
}
/**
 * 
 * @export
 * @interface PokemonSpeciesDetailGeneraInner
 */
export interface PokemonSpeciesDetailGeneraInner {
    /**
     * 
     * @type {string}
     * @memberof PokemonSpeciesDetailGeneraInner
     */
    genus: string;
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof PokemonSpeciesDetailGeneraInner
     */
    language: AbilityDetailPokemonInnerPokemon;
}
/**
 * 
 * @export
 * @interface PokemonSpeciesDetailPalParkEncountersInner
 */
export interface PokemonSpeciesDetailPalParkEncountersInner {
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof PokemonSpeciesDetailPalParkEncountersInner
     */
    area: AbilityDetailPokemonInnerPokemon;
    /**
     * 
     * @type {number}
     * @memberof PokemonSpeciesDetailPalParkEncountersInner
     */
    baseScore: number;
    /**
     * 
     * @type {number}
     * @memberof PokemonSpeciesDetailPalParkEncountersInner
     */
    rate: number;
}
/**
 * 
 * @export
 * @interface PokemonSpeciesDetailVarietiesInner
 */
export interface PokemonSpeciesDetailVarietiesInner {
    /**
     * 
     * @type {boolean}
     * @memberof PokemonSpeciesDetailVarietiesInner
     */
    isDefault: boolean;
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof PokemonSpeciesDetailVarietiesInner
     */
    pokemon: AbilityDetailPokemonInnerPokemon;
}
/**
 * 
 * @export
 * @interface PokemonSpeciesFlavorText
 */
export interface PokemonSpeciesFlavorText {
    /**
     * 
     * @type {string}
     * @memberof PokemonSpeciesFlavorText
     */
    flavorText: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof PokemonSpeciesFlavorText
     */
    language: LanguageSummary;
    /**
     * 
     * @type {VersionSummary}
     * @memberof PokemonSpeciesFlavorText
     */
    version: VersionSummary;
}
/**
 * 
 * @export
 * @interface PokemonSpeciesSummary
 */
export interface PokemonSpeciesSummary {
    /**
     * 
     * @type {string}
     * @memberof PokemonSpeciesSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PokemonSpeciesSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface PokemonStat
 */
export interface PokemonStat {
    /**
     * 
     * @type {number}
     * @memberof PokemonStat
     */
    baseStat: number;
    /**
     * 
     * @type {number}
     * @memberof PokemonStat
     */
    effort: number;
    /**
     * 
     * @type {StatSummary}
     * @memberof PokemonStat
     */
    stat: StatSummary;
}
/**
 * 
 * @export
 * @interface PokemonSummary
 */
export interface PokemonSummary {
    /**
     * 
     * @type {string}
     * @memberof PokemonSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PokemonSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface RegionDetail
 */
export interface RegionDetail {
    /**
     * 
     * @type {number}
     * @memberof RegionDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof RegionDetail
     */
    name: string;
    /**
     * 
     * @type {Array<LocationSummary>}
     * @memberof RegionDetail
     */
    locations: Array<LocationSummary>;
    /**
     * 
     * @type {RegionDetailMainGeneration}
     * @memberof RegionDetail
     */
    mainGeneration: RegionDetailMainGeneration;
    /**
     * 
     * @type {Array<RegionName>}
     * @memberof RegionDetail
     */
    names: Array<RegionName>;
    /**
     * 
     * @type {Array<PokedexSummary>}
     * @memberof RegionDetail
     */
    pokedexes: Array<PokedexSummary>;
    /**
     * 
     * @type {Array<AbilityDetailPokemonInnerPokemon>}
     * @memberof RegionDetail
     */
    versionGroups: Array<AbilityDetailPokemonInnerPokemon>;
}
/**
 * 
 * @export
 * @interface RegionDetailMainGeneration
 */
export interface RegionDetailMainGeneration {
    /**
     * 
     * @type {string}
     * @memberof RegionDetailMainGeneration
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof RegionDetailMainGeneration
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface RegionName
 */
export interface RegionName {
    /**
     * 
     * @type {string}
     * @memberof RegionName
     */
    name: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof RegionName
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface RegionSummary
 */
export interface RegionSummary {
    /**
     * 
     * @type {string}
     * @memberof RegionSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof RegionSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface StatDetail
 */
export interface StatDetail {
    /**
     * 
     * @type {number}
     * @memberof StatDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof StatDetail
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof StatDetail
     */
    gameIndex: number;
    /**
     * 
     * @type {boolean}
     * @memberof StatDetail
     */
    isBattleOnly?: boolean;
    /**
     * 
     * @type {StatDetailAffectingMoves}
     * @memberof StatDetail
     */
    affectingMoves: StatDetailAffectingMoves;
    /**
     * 
     * @type {StatDetailAffectingNatures}
     * @memberof StatDetail
     */
    affectingNatures: StatDetailAffectingNatures;
    /**
     * 
     * @type {Array<CharacteristicSummary>}
     * @memberof StatDetail
     */
    characteristics: Array<CharacteristicSummary>;
    /**
     * 
     * @type {MoveDamageClassSummary}
     * @memberof StatDetail
     */
    moveDamageClass: MoveDamageClassSummary;
    /**
     * 
     * @type {Array<StatName>}
     * @memberof StatDetail
     */
    names: Array<StatName>;
}
/**
 * 
 * @export
 * @interface StatDetailAffectingMoves
 */
export interface StatDetailAffectingMoves {
    /**
     * 
     * @type {Array<StatDetailAffectingMovesIncreaseInner>}
     * @memberof StatDetailAffectingMoves
     */
    increase: Array<StatDetailAffectingMovesIncreaseInner>;
    /**
     * 
     * @type {Array<StatDetailAffectingMovesIncreaseInner>}
     * @memberof StatDetailAffectingMoves
     */
    decrease: Array<StatDetailAffectingMovesIncreaseInner>;
}
/**
 * 
 * @export
 * @interface StatDetailAffectingMovesIncreaseInner
 */
export interface StatDetailAffectingMovesIncreaseInner {
    /**
     * 
     * @type {number}
     * @memberof StatDetailAffectingMovesIncreaseInner
     */
    change: number;
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof StatDetailAffectingMovesIncreaseInner
     */
    move: AbilityDetailPokemonInnerPokemon;
}
/**
 * 
 * @export
 * @interface StatDetailAffectingNatures
 */
export interface StatDetailAffectingNatures {
    /**
     * 
     * @type {Array<AbilityDetailPokemonInnerPokemon>}
     * @memberof StatDetailAffectingNatures
     */
    increase: Array<AbilityDetailPokemonInnerPokemon>;
    /**
     * 
     * @type {Array<AbilityDetailPokemonInnerPokemon>}
     * @memberof StatDetailAffectingNatures
     */
    decrease: Array<AbilityDetailPokemonInnerPokemon>;
}
/**
 * 
 * @export
 * @interface StatName
 */
export interface StatName {
    /**
     * 
     * @type {string}
     * @memberof StatName
     */
    name: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof StatName
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface StatSummary
 */
export interface StatSummary {
    /**
     * 
     * @type {string}
     * @memberof StatSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof StatSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface SuperContestEffectDetail
 */
export interface SuperContestEffectDetail {
    /**
     * 
     * @type {number}
     * @memberof SuperContestEffectDetail
     */
    readonly id: number;
    /**
     * 
     * @type {number}
     * @memberof SuperContestEffectDetail
     */
    appeal: number;
    /**
     * 
     * @type {Array<SuperContestEffectFlavorText>}
     * @memberof SuperContestEffectDetail
     */
    flavorTextEntries: Array<SuperContestEffectFlavorText>;
    /**
     * 
     * @type {Array<MoveSummary>}
     * @memberof SuperContestEffectDetail
     */
    moves: Array<MoveSummary>;
}
/**
 * 
 * @export
 * @interface SuperContestEffectFlavorText
 */
export interface SuperContestEffectFlavorText {
    /**
     * 
     * @type {string}
     * @memberof SuperContestEffectFlavorText
     */
    flavorText: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof SuperContestEffectFlavorText
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface SuperContestEffectSummary
 */
export interface SuperContestEffectSummary {
    /**
     * 
     * @type {string}
     * @memberof SuperContestEffectSummary
     */
    readonly url: string;
}
/**
 * Serializer for the Type resource
 * @export
 * @interface TypeDetail
 */
export interface TypeDetail {
    /**
     * 
     * @type {number}
     * @memberof TypeDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof TypeDetail
     */
    name: string;
    /**
     * 
     * @type {TypeDetailDamageRelations}
     * @memberof TypeDetail
     */
    damageRelations: TypeDetailDamageRelations;
    /**
     * 
     * @type {Array<TypeDetailPastDamageRelationsInner>}
     * @memberof TypeDetail
     */
    pastDamageRelations: Array<TypeDetailPastDamageRelationsInner>;
    /**
     * 
     * @type {Array<TypeGameIndex>}
     * @memberof TypeDetail
     */
    gameIndices: Array<TypeGameIndex>;
    /**
     * 
     * @type {GenerationSummary}
     * @memberof TypeDetail
     */
    generation: GenerationSummary;
    /**
     * 
     * @type {MoveDamageClassSummary}
     * @memberof TypeDetail
     */
    moveDamageClass: MoveDamageClassSummary;
    /**
     * 
     * @type {Array<AbilityName>}
     * @memberof TypeDetail
     */
    names: Array<AbilityName>;
    /**
     * 
     * @type {Array<TypeDetailPokemonInner>}
     * @memberof TypeDetail
     */
    pokemon: Array<TypeDetailPokemonInner>;
    /**
     * 
     * @type {Array<MoveSummary>}
     * @memberof TypeDetail
     */
    moves: Array<MoveSummary>;
}
/**
 * 
 * @export
 * @interface TypeDetailDamageRelations
 */
export interface TypeDetailDamageRelations {
    /**
     * 
     * @type {Array<AbilityDetailPokemonInnerPokemon>}
     * @memberof TypeDetailDamageRelations
     */
    noDamageTo: Array<AbilityDetailPokemonInnerPokemon>;
    /**
     * 
     * @type {Array<AbilityDetailPokemonInnerPokemon>}
     * @memberof TypeDetailDamageRelations
     */
    halfDamageTo: Array<AbilityDetailPokemonInnerPokemon>;
    /**
     * 
     * @type {Array<AbilityDetailPokemonInnerPokemon>}
     * @memberof TypeDetailDamageRelations
     */
    doubleDamageTo: Array<AbilityDetailPokemonInnerPokemon>;
    /**
     * 
     * @type {Array<AbilityDetailPokemonInnerPokemon>}
     * @memberof TypeDetailDamageRelations
     */
    noDamageFrom: Array<AbilityDetailPokemonInnerPokemon>;
    /**
     * 
     * @type {Array<AbilityDetailPokemonInnerPokemon>}
     * @memberof TypeDetailDamageRelations
     */
    halfDamageFrom: Array<AbilityDetailPokemonInnerPokemon>;
    /**
     * 
     * @type {Array<AbilityDetailPokemonInnerPokemon>}
     * @memberof TypeDetailDamageRelations
     */
    doubleDamageFrom: Array<AbilityDetailPokemonInnerPokemon>;
}
/**
 * 
 * @export
 * @interface TypeDetailPastDamageRelationsInner
 */
export interface TypeDetailPastDamageRelationsInner {
    /**
     * 
     * @type {AbilityDetailPokemonInnerPokemon}
     * @memberof TypeDetailPastDamageRelationsInner
     */
    generation: AbilityDetailPokemonInnerPokemon;
    /**
     * 
     * @type {TypeDetailPastDamageRelationsInnerDamageRelations}
     * @memberof TypeDetailPastDamageRelationsInner
     */
    damageRelations: TypeDetailPastDamageRelationsInnerDamageRelations;
}
/**
 * 
 * @export
 * @interface TypeDetailPastDamageRelationsInnerDamageRelations
 */
export interface TypeDetailPastDamageRelationsInnerDamageRelations {
    /**
     * 
     * @type {Array<AbilityDetailPokemonInnerPokemon>}
     * @memberof TypeDetailPastDamageRelationsInnerDamageRelations
     */
    noDamageTo: Array<AbilityDetailPokemonInnerPokemon>;
    /**
     * 
     * @type {Array<AbilityDetailPokemonInnerPokemon>}
     * @memberof TypeDetailPastDamageRelationsInnerDamageRelations
     */
    halfDamageTo: Array<AbilityDetailPokemonInnerPokemon>;
    /**
     * 
     * @type {Array<AbilityDetailPokemonInnerPokemon>}
     * @memberof TypeDetailPastDamageRelationsInnerDamageRelations
     */
    doubleDamageTo: Array<AbilityDetailPokemonInnerPokemon>;
    /**
     * 
     * @type {Array<AbilityDetailPokemonInnerPokemon>}
     * @memberof TypeDetailPastDamageRelationsInnerDamageRelations
     */
    noDamageFrom: Array<AbilityDetailPokemonInnerPokemon>;
    /**
     * 
     * @type {Array<AbilityDetailPokemonInnerPokemon>}
     * @memberof TypeDetailPastDamageRelationsInnerDamageRelations
     */
    halfDamageFrom: Array<AbilityDetailPokemonInnerPokemon>;
    /**
     * 
     * @type {Array<AbilityDetailPokemonInnerPokemon>}
     * @memberof TypeDetailPastDamageRelationsInnerDamageRelations
     */
    doubleDamageFrom: Array<AbilityDetailPokemonInnerPokemon>;
}
/**
 * 
 * @export
 * @interface TypeDetailPokemonInner
 */
export interface TypeDetailPokemonInner {
    /**
     * 
     * @type {number}
     * @memberof TypeDetailPokemonInner
     */
    slot?: number;
    /**
     * 
     * @type {TypeDetailPokemonInnerPokemon}
     * @memberof TypeDetailPokemonInner
     */
    pokemon?: TypeDetailPokemonInnerPokemon;
}
/**
 * 
 * @export
 * @interface TypeDetailPokemonInnerPokemon
 */
export interface TypeDetailPokemonInnerPokemon {
    /**
     * The name of the pokemon
     * @type {string}
     * @memberof TypeDetailPokemonInnerPokemon
     */
    name?: string;
    /**
     * The URL to get more information about the pokemon
     * @type {string}
     * @memberof TypeDetailPokemonInnerPokemon
     */
    url?: string;
}
/**
 * 
 * @export
 * @interface TypeGameIndex
 */
export interface TypeGameIndex {
    /**
     * 
     * @type {number}
     * @memberof TypeGameIndex
     */
    gameIndex: number;
    /**
     * 
     * @type {GenerationSummary}
     * @memberof TypeGameIndex
     */
    generation: GenerationSummary;
}
/**
 * 
 * @export
 * @interface TypeSummary
 */
export interface TypeSummary {
    /**
     * 
     * @type {string}
     * @memberof TypeSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof TypeSummary
     */
    readonly url: string;
}
/**
 * Should have a link to Version Group info but the Circular
 * dependency and compilation order fight eachother and I'm
 * not sure how to add anything other than a hyperlink
 * @export
 * @interface VersionDetail
 */
export interface VersionDetail {
    /**
     * 
     * @type {number}
     * @memberof VersionDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof VersionDetail
     */
    name: string;
    /**
     * 
     * @type {Array<VersionName>}
     * @memberof VersionDetail
     */
    names: Array<VersionName>;
    /**
     * 
     * @type {VersionGroupSummary}
     * @memberof VersionDetail
     */
    versionGroup: VersionGroupSummary;
}
/**
 * 
 * @export
 * @interface VersionGroupDetail
 */
export interface VersionGroupDetail {
    /**
     * 
     * @type {number}
     * @memberof VersionGroupDetail
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof VersionGroupDetail
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof VersionGroupDetail
     */
    order?: number;
    /**
     * 
     * @type {GenerationSummary}
     * @memberof VersionGroupDetail
     */
    generation: GenerationSummary;
    /**
     * 
     * @type {Array<AbilityDetailPokemonInnerPokemon>}
     * @memberof VersionGroupDetail
     */
    moveLearnMethods: Array<AbilityDetailPokemonInnerPokemon>;
    /**
     * 
     * @type {Array<AbilityDetailPokemonInnerPokemon>}
     * @memberof VersionGroupDetail
     */
    pokedexes: Array<AbilityDetailPokemonInnerPokemon>;
    /**
     * 
     * @type {Array<AbilityDetailPokemonInnerPokemon>}
     * @memberof VersionGroupDetail
     */
    regions: Array<AbilityDetailPokemonInnerPokemon>;
    /**
     * 
     * @type {Array<VersionSummary>}
     * @memberof VersionGroupDetail
     */
    versions: Array<VersionSummary>;
}
/**
 * 
 * @export
 * @interface VersionGroupSummary
 */
export interface VersionGroupSummary {
    /**
     * 
     * @type {string}
     * @memberof VersionGroupSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof VersionGroupSummary
     */
    readonly url: string;
}
/**
 * 
 * @export
 * @interface VersionName
 */
export interface VersionName {
    /**
     * 
     * @type {string}
     * @memberof VersionName
     */
    name: string;
    /**
     * 
     * @type {LanguageSummary}
     * @memberof VersionName
     */
    language: LanguageSummary;
}
/**
 * 
 * @export
 * @interface VersionSummary
 */
export interface VersionSummary {
    /**
     * 
     * @type {string}
     * @memberof VersionSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof VersionSummary
     */
    readonly url: string;
}

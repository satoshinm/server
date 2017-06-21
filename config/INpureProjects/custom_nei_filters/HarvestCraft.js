if (FML.isModLoaded("harvestcraft") && HarvestCraft_enabled) {

}

var cropTiles = ["ovenon", "churnon", "quernon", "pamApple", "pamAlmond", "pamApricot", "pamAvocado", "pamBanana", "pamCashew", "pamCherry", "pamChestnut", "pamCinnamon", "pamCoconut", "pamDate", "pamDragonfruit", "pamDurian", "pamFig", "pamGrapefruit", "pamLemon", "pamLime", "pamMaple", "pamMango", "pamNutmeg", "pamOlive", "pamOrange", "pamPapaya", "pamPaperbark", "pamPeach", "pamPear", "pamPecan", "pamPeppercorn", "pamPersimmon", "pamPistachio", "pamPlum", "pamPomegranate", "pamStarfruit", "pamVanillabean", "pamWalnut", "pamblackberryCrop", "pamblueberryCrop", "pamcandleberryCrop", "pamraspberryCrop", "pamstrawberryCrop", "pamcactusfruitCrop", "pamasparagusCrop", "pambarleyCrop", "pamoatsCrop", "pamryeCrop", "pamcornCrop", "pambambooshootCrop", "pamcantaloupeCrop", "pamcucumberCrop", "pamwintersquashCrop", "pamzucchiniCrop", "pambeetCrop", "pamonionCrop", "pamparsnipCrop", "pampeanutCrop", "pamradishCrop", "pamrutabagaCrop", "pamsweetpotatoCrop", "pamturnipCrop", "pamrhubarbCrop", "pamceleryCrop", "pamgarlicCrop", "pamgingerCrop", "pamspiceleafCrop", "pamtealeafCrop", "pamcoffeebeanCrop", "pammustardseedsCrop", "pambroccoliCrop", "pamcauliflowerCrop", "pamleekCrop", "pamlettuceCrop", "pamscallionCrop", "pamartichokeCrop", "pambrusselsproutCrop", "pamcabbageCrop", "pamspinachCrop", "pamwhitemushroomCrop", "pambeanCrop", "pamsoybeanCrop", "pambellpepperCrop", "pamchilipepperCrop", "pameggplantCrop", "pamokraCrop", "pampeasCrop", "pamtomatoCrop", "pamcottonCrop", "pampineappleCrop", "pamgrapeCrop", "pamkiwiCrop", "pamcranberryCrop", "pamriceCrop", "pamseaweedCrop"]
if (HarvestCraft_enabled) {
    for each(block in cropTiles){
        // Vanilla items and blocks have special handlers.
        NEI.hide("harvestcraft", block);
    }
}
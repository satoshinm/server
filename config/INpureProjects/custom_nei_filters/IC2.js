if (FML.isModLoaded("IC2") && IC2_enabled) {
	NEI.override("IC2:itemFluidCell", [0]);
	NEI.override("IC2:itemCellEmpty", [0]);
}
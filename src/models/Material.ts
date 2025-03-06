enum Material {
	All = "All",
	Paper = "Paper",
	Plastic = "Plastic",
	Glass = "Glass",
	Metal = "Metal",
	Bio = "Bio",
}

const MaterialColors: { [key in Material]: string } = {
	[Material.All]: "#000000",
	[Material.Paper]: "#1E90FF",
	[Material.Plastic]: "#FFD700",
	[Material.Glass]: "#32CD32",
	[Material.Metal]: "#A9A9A9",
	[Material.Bio]: "#8B4513",
};

export { Material, MaterialColors };

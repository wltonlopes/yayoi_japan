g_BackgroundLayerData.push(
	[
		{
			"offset": (time, width) => 0.05 * width * Math.cos(0.02 * time),
			"sprite": "background-yayoi_thumb_1",
			"tiling": true,
		},
		{
			"offset": (time, width) => 0.10 * width * Math.cos(0.04 * time),
			"sprite": "background-yayoi_thumb_1",
			"tiling": true,
		},
	]);

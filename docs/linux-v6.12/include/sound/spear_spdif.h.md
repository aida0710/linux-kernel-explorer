---
sidebar_position: 135
---
# spear_spdif.h

### ファイル情報

- パス: `linux-v6.12/include/sound/spear_spdif.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-or-later */
/*
 * Copyright (ST) 2012 Vipin Kumar (vipin.kumar@st.com)
 */

#ifndef __SOUND_SPDIF_H
#define __SOUND_SPDIF_H

struct spear_spdif_platform_data {
	/* DMA params */
	void *dma_params;
	bool (*filter)(struct dma_chan *chan, void *slave);
	void (*reset_perip)(void);
};

#endif /* SOUND_SPDIF_H */

```

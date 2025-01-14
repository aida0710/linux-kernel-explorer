---
sidebar_position: 8
---
# spear_pcm.h

### ファイル情報

- パス: `linux-v6.12/sound/soc/spear/spear_pcm.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * Copyright (c) 2013, NVIDIA CORPORATION.  All rights reserved.
 */

#ifndef __SPEAR_PCM_H__
#define __SPEAR_PCM_H__

int devm_spear_pcm_platform_register(struct device *dev,
			struct snd_dmaengine_pcm_config *config,
			bool (*filter)(struct dma_chan *chan, void *slave));

#endif

```

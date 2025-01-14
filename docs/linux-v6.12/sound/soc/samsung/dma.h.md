---
sidebar_position: 4
---
# dma.h

### ファイル情報

- パス: `linux-v6.12/sound/soc/samsung/dma.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0+ */
/*
 * ALSA PCM interface for the Samsung SoC
 */

#ifndef _SAMSUNG_DMA_H
#define _SAMSUNG_DMA_H

#include <sound/dmaengine_pcm.h>

/*
 * @tx, @rx arguments can be NULL if the DMA channel names are "tx", "rx",
 * otherwise actual DMA channel names must be passed to this function.
 */
int samsung_asoc_dma_platform_register(struct device *dev, dma_filter_fn filter,
				       const char *tx, const char *rx,
				       struct device *dma_dev);
#endif /* _SAMSUNG_DMA_H */

```

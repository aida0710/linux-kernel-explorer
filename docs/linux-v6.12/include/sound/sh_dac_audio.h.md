---
sidebar_position: 114
---
# sh_dac_audio.h

### ファイル情報

- パス: `linux-v6.12/include/sound/sh_dac_audio.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * SH_DAC specific configuration, for the dac_audio platform_device
 *
 * Copyright (C) 2009 Rafael Ignacio Zurita <rizurita@yahoo.com>
 */

#ifndef __INCLUDE_SH_DAC_AUDIO_H
#define __INCLUDE_SH_DAC_AUDIO_H

struct dac_audio_pdata {
	int buffer_size;
	int channel;
	void (*start)(struct dac_audio_pdata *pd);
	void (*stop)(struct dac_audio_pdata *pd);
};

#endif /* __INCLUDE_SH_DAC_AUDIO_H */

```

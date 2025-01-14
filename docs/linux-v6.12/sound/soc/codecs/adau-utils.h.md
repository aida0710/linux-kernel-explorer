---
sidebar_position: 16
---
# adau-utils.h

### ファイル情報

- パス: `linux-v6.12/sound/soc/codecs/adau-utils.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef SOUND_SOC_CODECS_ADAU_PLL_H
#define SOUND_SOC_CODECS_ADAU_PLL_H

int adau_calc_pll_cfg(unsigned int freq_in, unsigned int freq_out,
	uint8_t regs[5]);

#endif

```

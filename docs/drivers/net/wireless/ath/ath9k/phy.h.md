---
sidebar_position: 101
---
# phy.h

### ファイル情報

- パス: `drivers/net/wireless/ath/ath9k/phy.h`

### コンテンツ

```h
/*
 * Copyright (c) 2008-2011 Atheros Communications Inc.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

#ifndef PHY_H
#define PHY_H

#define CHANSEL_DIV		15
#define CHANSEL_2G(_freq)	(((_freq) * 0x10000) / CHANSEL_DIV)
#define CHANSEL_5G(_freq)	(((_freq) * 0x8000) / CHANSEL_DIV)

#define AR_PHY_BASE     0x9800
#define AR_PHY(_n)      (AR_PHY_BASE + ((_n)<<2))

#define AR_PHY_TX_PWRCTRL_TX_GAIN_TAB_MAX   0x0007E000
#define AR_PHY_TX_PWRCTRL_TX_GAIN_TAB_MAX_S 13
#define AR_PHY_TX_GAIN_CLC       0x0000001E
#define AR_PHY_TX_GAIN_CLC_S     1
#define AR_PHY_TX_GAIN           0x0007F000
#define AR_PHY_TX_GAIN_S         12

#define AR_PHY_CLC_TBL1      0xa35c
#define AR_PHY_CLC_I0        0x07ff0000
#define AR_PHY_CLC_I0_S      16
#define AR_PHY_CLC_Q0        0x0000ffd0
#define AR_PHY_CLC_Q0_S      5

#define ANTSWAP_AB 0x0001
#define REDUCE_CHAIN_0 0x00000050
#define REDUCE_CHAIN_1 0x00000051
#define AR_PHY_CHIP_ID 0x9818

#define	AR_PHY_TIMING11_SPUR_FREQ_SD		0x3FF00000
#define	AR_PHY_TIMING11_SPUR_FREQ_SD_S		20

#define AR_PHY_PLL_CONTROL 0x16180
#define AR_PHY_PLL_MODE 0x16184

enum ath9k_ant_div_comb_lna_conf {
	ATH_ANT_DIV_COMB_LNA1_MINUS_LNA2,
	ATH_ANT_DIV_COMB_LNA2,
	ATH_ANT_DIV_COMB_LNA1,
	ATH_ANT_DIV_COMB_LNA1_PLUS_LNA2,
};

#endif

```

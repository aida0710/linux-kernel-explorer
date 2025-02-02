---
sidebar_position: 1
---
# def.h

### ファイル情報

- パス: `drivers/net/wireless/realtek/rtlwifi/rtl8192ee/def.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/* Copyright(c) 2009-2014  Realtek Corporation.*/

#ifndef __RTL92E_DEF_H__
#define __RTL92E_DEF_H__

#define RX_DESC_NUM_92E					512

#define HAL_PRIME_CHNL_OFFSET_DONT_CARE			0
#define HAL_PRIME_CHNL_OFFSET_LOWER			1
#define HAL_PRIME_CHNL_OFFSET_UPPER			2

#define RX_MPDU_QUEUE					0

#define IS_HT_RATE(_rate)	\
	(_rate >= DESC92C_RATEMCS0)
#define IS_CCK_RATE(_rate)	\
	(_rate >= DESC92C_RATE1M && _rate <= DESC92C_RATE11M)
#define IS_OFDM_RATE(_rate)	\
	(_rate >= DESC92C_RATE6M && _rate <= DESC92C_RATE54M)

enum version_8192e {
	VERSION_TEST_CHIP_2T2R_8192E = 0x0024,
	VERSION_NORMAL_CHIP_2T2R_8192E = 0x102C,
	VERSION_UNKNOWN = 0xFF,
};

enum rtl_desc_qsel {
	QSLT_BK = 0x2,
	QSLT_BE = 0x0,
	QSLT_VI = 0x5,
	QSLT_VO = 0x7,
	QSLT_BEACON = 0x10,
	QSLT_HIGH = 0x11,
	QSLT_MGNT = 0x12,
	QSLT_CMD = 0x13,
};

enum rtl_desc92c_rate {
	DESC92C_RATE1M = 0x00,
	DESC92C_RATE2M = 0x01,
	DESC92C_RATE5_5M = 0x02,
	DESC92C_RATE11M = 0x03,

	DESC92C_RATE6M = 0x04,
	DESC92C_RATE9M = 0x05,
	DESC92C_RATE12M = 0x06,
	DESC92C_RATE18M = 0x07,
	DESC92C_RATE24M = 0x08,
	DESC92C_RATE36M = 0x09,
	DESC92C_RATE48M = 0x0a,
	DESC92C_RATE54M = 0x0b,

	DESC92C_RATEMCS0 = 0x0c,
	DESC92C_RATEMCS1 = 0x0d,
	DESC92C_RATEMCS2 = 0x0e,
	DESC92C_RATEMCS3 = 0x0f,
	DESC92C_RATEMCS4 = 0x10,
	DESC92C_RATEMCS5 = 0x11,
	DESC92C_RATEMCS6 = 0x12,
	DESC92C_RATEMCS7 = 0x13,
	DESC92C_RATEMCS8 = 0x14,
	DESC92C_RATEMCS9 = 0x15,
	DESC92C_RATEMCS10 = 0x16,
	DESC92C_RATEMCS11 = 0x17,
	DESC92C_RATEMCS12 = 0x18,
	DESC92C_RATEMCS13 = 0x19,
	DESC92C_RATEMCS14 = 0x1a,
	DESC92C_RATEMCS15 = 0x1b,
};
#endif

```

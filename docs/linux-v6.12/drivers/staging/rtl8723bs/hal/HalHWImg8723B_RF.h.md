---
sidebar_position: 12
---
# HalHWImg8723B_RF.h

### ファイル情報

- パス: `linux-v6.12/drivers/staging/rtl8723bs/hal/HalHWImg8723B_RF.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/******************************************************************************
*
* Copyright(c) 2007 - 2011 Realtek Corporation. All rights reserved.
*
******************************************************************************/

#ifndef __INC_MP_RF_HW_IMG_8723B_H
#define __INC_MP_RF_HW_IMG_8723B_H


/******************************************************************************
*                           RadioA.TXT
******************************************************************************/

void
ODM_ReadAndConfig_MP_8723B_RadioA(/*  TC: Test Chip, MP: MP Chip */
	struct dm_odm_t *pDM_Odm
);

/******************************************************************************
*                           TxPowerTrack_SDIO.TXT
******************************************************************************/

void
ODM_ReadAndConfig_MP_8723B_TxPowerTrack_SDIO(/*  TC: Test Chip, MP: MP Chip */
	struct dm_odm_t *pDM_Odm
);
u32 ODM_GetVersion_MP_8723B_TxPowerTrack_SDIO(void);

/******************************************************************************
*                           TXPWR_LMT.TXT
******************************************************************************/

void
ODM_ReadAndConfig_MP_8723B_TXPWR_LMT(/*  TC: Test Chip, MP: MP Chip */
	struct dm_odm_t *pDM_Odm
);
u32 ODM_GetVersion_MP_8723B_TXPWR_LMT(void);

#endif

```

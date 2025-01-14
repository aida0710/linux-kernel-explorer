---
sidebar_position: 33
---
# odm_DynamicTxPower.c

### ファイル情報

- パス: `linux-v6.12/drivers/staging/rtl8723bs/hal/odm_DynamicTxPower.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/******************************************************************************
 *
 * Copyright(c) 2007 - 2011 Realtek Corporation. All rights reserved.
 *
 ******************************************************************************/

#include "odm_precomp.h"

void odm_DynamicTxPowerInit(void *pDM_VOID)
{
	struct dm_odm_t *pDM_Odm = (struct dm_odm_t *)pDM_VOID;

	struct adapter *Adapter = pDM_Odm->Adapter;
	struct hal_com_data *pHalData = GET_HAL_DATA(Adapter);
	struct dm_priv *pdmpriv = &pHalData->dmpriv;

	pdmpriv->bDynamicTxPowerEnable = false;

	pdmpriv->LastDTPLvl = TxHighPwrLevel_Normal;
	pdmpriv->DynamicTxHighPowerLvl = TxHighPwrLevel_Normal;
}

```

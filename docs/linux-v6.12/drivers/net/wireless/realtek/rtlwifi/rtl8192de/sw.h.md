---
sidebar_position: 15
---
# sw.h

### ファイル情報

- パス: `linux-v6.12/drivers/net/wireless/realtek/rtlwifi/rtl8192de/sw.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/* Copyright(c) 2009-2012  Realtek Corporation.*/

#ifndef __RTL92DE_SW_H__
#define __RTL92DE_SW_H__

extern spinlock_t globalmutex_power;
extern spinlock_t globalmutex_for_fwdownload;
extern spinlock_t globalmutex_for_power_and_efuse;

#endif

```

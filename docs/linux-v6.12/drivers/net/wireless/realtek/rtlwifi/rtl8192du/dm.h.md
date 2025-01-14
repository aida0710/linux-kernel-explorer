---
sidebar_position: 2
---
# dm.h

### ファイル情報

- パス: `linux-v6.12/drivers/net/wireless/realtek/rtlwifi/rtl8192du/dm.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/* Copyright(c) 2024  Realtek Corporation.*/

#ifndef __RTL92DU_DM_H__
#define __RTL92DU_DM_H__

void rtl92du_dm_init(struct ieee80211_hw *hw);
void rtl92du_dm_watchdog(struct ieee80211_hw *hw);

#endif

```

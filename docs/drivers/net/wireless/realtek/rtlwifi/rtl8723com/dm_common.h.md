---
sidebar_position: 2
---
# dm_common.h

### ファイル情報

- パス: `drivers/net/wireless/realtek/rtlwifi/rtl8723com/dm_common.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/* Copyright(c) 2009-2014  Realtek Corporation.*/

#ifndef __DM_COMMON_H__
#define __DM_COMMON_H__

void rtl8723_dm_init_dynamic_txpower(struct ieee80211_hw *hw);
void rtl8723_dm_init_edca_turbo(struct ieee80211_hw *hw);
void rtl8723_dm_init_dynamic_bb_powersaving(struct ieee80211_hw *hw);

#endif

```

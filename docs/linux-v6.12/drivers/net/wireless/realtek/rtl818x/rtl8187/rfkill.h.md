---
sidebar_position: 6
---
# rfkill.h

### ファイル情報

- パス: `linux-v6.12/drivers/net/wireless/realtek/rtl818x/rtl8187/rfkill.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef RTL8187_RFKILL_H
#define RTL8187_RFKILL_H

void rtl8187_rfkill_init(struct ieee80211_hw *hw);
void rtl8187_rfkill_poll(struct ieee80211_hw *hw);
void rtl8187_rfkill_exit(struct ieee80211_hw *hw);

#endif /* RTL8187_RFKILL_H */

```

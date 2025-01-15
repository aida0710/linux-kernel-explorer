---
sidebar_position: 44
---
# rfkill.h

### ファイル情報

- パス: `drivers/net/wireless/broadcom/b43/rfkill.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef B43_RFKILL_H_
#define B43_RFKILL_H_

struct ieee80211_hw;
struct b43_wldev;

void b43_rfkill_poll(struct ieee80211_hw *hw);

bool b43_is_hw_radio_enabled(struct b43_wldev *dev);

#endif /* B43_RFKILL_H_ */

```

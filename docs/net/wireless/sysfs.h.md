---
sidebar_position: 26
---
# sysfs.h

### ファイル情報

- パス: `net/wireless/sysfs.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __WIRELESS_SYSFS_H
#define __WIRELESS_SYSFS_H

int wiphy_sysfs_init(void);
void wiphy_sysfs_exit(void);

extern struct class ieee80211_class;

#endif /* __WIRELESS_SYSFS_H */

```

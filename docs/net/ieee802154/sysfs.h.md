---
sidebar_position: 17
---
# sysfs.h

### ファイル情報

- パス: `net/ieee802154/sysfs.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __IEEE802154_SYSFS_H
#define __IEEE802154_SYSFS_H

int wpan_phy_sysfs_init(void);
void wpan_phy_sysfs_exit(void);

extern const struct class wpan_phy_class;

#endif /* __IEEE802154_SYSFS_H */

```

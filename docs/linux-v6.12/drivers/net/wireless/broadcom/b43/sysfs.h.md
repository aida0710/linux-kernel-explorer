---
sidebar_position: 48
---
# sysfs.h

### ファイル情報

- パス: `linux-v6.12/drivers/net/wireless/broadcom/b43/sysfs.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef B43_SYSFS_H_
#define B43_SYSFS_H_

struct b43_wldev;

int b43_sysfs_register(struct b43_wldev *dev);
void b43_sysfs_unregister(struct b43_wldev *dev);

#endif /* B43_SYSFS_H_ */

```

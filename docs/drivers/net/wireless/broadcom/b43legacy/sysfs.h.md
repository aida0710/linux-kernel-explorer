---
sidebar_position: 23
---
# sysfs.h

### ファイル情報

- パス: `drivers/net/wireless/broadcom/b43legacy/sysfs.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef B43legacy_SYSFS_H_
#define B43legacy_SYSFS_H_

struct b43legacy_wldev;

int b43legacy_sysfs_register(struct b43legacy_wldev *dev);
void b43legacy_sysfs_unregister(struct b43legacy_wldev *dev);

#endif /* B43legacy_SYSFS_H_ */

```

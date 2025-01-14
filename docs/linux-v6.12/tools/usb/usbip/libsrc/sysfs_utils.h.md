---
sidebar_position: 6
---
# sysfs_utils.h

### ファイル情報

- パス: `linux-v6.12/tools/usb/usbip/libsrc/sysfs_utils.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */

#ifndef __SYSFS_UTILS_H
#define __SYSFS_UTILS_H

int write_sysfs_attribute(const char *attr_path, const char *new_value,
			  size_t len);

#endif

```

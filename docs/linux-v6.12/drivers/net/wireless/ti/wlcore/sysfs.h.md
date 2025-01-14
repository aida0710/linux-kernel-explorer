---
sidebar_position: 31
---
# sysfs.h

### ファイル情報

- パス: `linux-v6.12/drivers/net/wireless/ti/wlcore/sysfs.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * This file is part of wlcore
 *
 * Copyright (C) 2013 Texas Instruments Inc.
 */

#ifndef __SYSFS_H__
#define __SYSFS_H__

int wlcore_sysfs_init(struct wl1271 *wl);
void wlcore_sysfs_free(struct wl1271 *wl);

#endif

```

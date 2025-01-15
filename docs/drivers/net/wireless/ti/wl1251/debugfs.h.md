---
sidebar_position: 8
---
# debugfs.h

### ファイル情報

- パス: `drivers/net/wireless/ti/wl1251/debugfs.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * This file is part of wl1251
 *
 * Copyright (C) 2009 Nokia Corporation
 */

#ifndef WL1251_DEBUGFS_H
#define WL1251_DEBUGFS_H

#include "wl1251.h"

int wl1251_debugfs_init(struct wl1251 *wl);
void wl1251_debugfs_exit(struct wl1251 *wl);
void wl1251_debugfs_reset(struct wl1251 *wl);

#endif /* WL1251_DEBUGFS_H */

```

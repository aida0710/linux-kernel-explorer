---
sidebar_position: 9
---
# manifest.h

### ファイル情報

- パス: `linux-v6.12/include/linux/greybus/manifest.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * Greybus manifest parsing
 *
 * Copyright 2014 Google Inc.
 * Copyright 2014 Linaro Ltd.
 */

#ifndef __MANIFEST_H
#define __MANIFEST_H

#include <linux/types.h>

struct gb_interface;
bool gb_manifest_parse(struct gb_interface *intf, void *data, size_t size);

#endif /* __MANIFEST_H */

```

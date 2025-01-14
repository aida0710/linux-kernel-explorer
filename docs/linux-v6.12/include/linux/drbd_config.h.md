---
sidebar_position: 298
---
# drbd_config.h

### ファイル情報

- パス: `linux-v6.12/include/linux/drbd_config.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * drbd_config.h
 * DRBD's compile time configuration.
 */

#ifndef DRBD_CONFIG_H
#define DRBD_CONFIG_H

extern const char *drbd_buildtag(void);

#define REL_VERSION "8.4.11"
#define PRO_VERSION_MIN 86
#define PRO_VERSION_MAX 101

#endif

```

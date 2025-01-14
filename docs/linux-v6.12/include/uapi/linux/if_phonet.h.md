---
sidebar_position: 189
---
# if_phonet.h

### ファイル情報

- パス: `linux-v6.12/include/uapi/linux/if_phonet.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 WITH Linux-syscall-note */
/*
 * File: if_phonet.h
 *
 * Phonet interface kernel definitions
 *
 * Copyright (C) 2008 Nokia Corporation. All rights reserved.
 */
#ifndef _UAPILINUX_IF_PHONET_H
#define _UAPILINUX_IF_PHONET_H

#define PHONET_MIN_MTU		6	/* pn_length = 0 */
#define PHONET_MAX_MTU		65541	/* pn_length = 0xffff */
#define PHONET_DEV_MTU		PHONET_MAX_MTU


#endif /* _UAPILINUX_IF_PHONET_H */

```

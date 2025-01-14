---
sidebar_position: 498
---
# if_ltalk.h

### ファイル情報

- パス: `linux-v6.12/include/linux/if_ltalk.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __LINUX_LTALK_H
#define __LINUX_LTALK_H

#include <uapi/linux/if_ltalk.h>

extern struct net_device *alloc_ltalkdev(int sizeof_priv);
#endif

```

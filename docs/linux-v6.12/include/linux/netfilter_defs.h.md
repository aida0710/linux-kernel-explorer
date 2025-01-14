---
sidebar_position: 823
---
# netfilter_defs.h

### ファイル情報

- パス: `linux-v6.12/include/linux/netfilter_defs.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __LINUX_NETFILTER_CORE_H_
#define __LINUX_NETFILTER_CORE_H_

#include <uapi/linux/netfilter.h>

/* in/out/forward only */
#define NF_ARP_NUMHOOKS 3

#define NF_MAX_HOOKS	NF_INET_NUMHOOKS

#endif

```

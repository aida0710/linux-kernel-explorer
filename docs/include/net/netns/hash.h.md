---
sidebar_position: 7
---
# hash.h

### ファイル情報

- パス: `include/net/netns/hash.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __NET_NS_HASH_H__
#define __NET_NS_HASH_H__

#include <net/net_namespace.h>

static inline u32 net_hash_mix(const struct net *net)
{
	return net->hash_mix;
}
#endif

```

---
sidebar_position: 62
---
# sock_destructor.h

### ファイル情報

- パス: `linux-v6.12/net/core/sock_destructor.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-or-later */
#ifndef _NET_CORE_SOCK_DESTRUCTOR_H
#define _NET_CORE_SOCK_DESTRUCTOR_H
#include <net/tcp.h>

static inline bool is_skb_wmem(const struct sk_buff *skb)
{
	return skb->destructor == sock_wfree ||
	       skb->destructor == __sock_wfree ||
	       (IS_ENABLED(CONFIG_INET) && skb->destructor == tcp_wfree);
}
#endif

```

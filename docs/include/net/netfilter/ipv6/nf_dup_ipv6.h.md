---
sidebar_position: 3
---
# nf_dup_ipv6.h

### ファイル情報

- パス: `include/net/netfilter/ipv6/nf_dup_ipv6.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _NF_DUP_IPV6_H_
#define _NF_DUP_IPV6_H_

#include <linux/skbuff.h>

void nf_dup_ipv6(struct net *net, struct sk_buff *skb, unsigned int hooknum,
		 const struct in6_addr *gw, int oif);

#endif /* _NF_DUP_IPV6_H_ */

```

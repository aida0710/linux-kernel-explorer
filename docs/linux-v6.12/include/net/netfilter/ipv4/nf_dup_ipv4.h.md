---
sidebar_position: 3
---
# nf_dup_ipv4.h

### ファイル情報

- パス: `linux-v6.12/include/net/netfilter/ipv4/nf_dup_ipv4.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _NF_DUP_IPV4_H_
#define _NF_DUP_IPV4_H_

#include <linux/skbuff.h>
#include <uapi/linux/in.h>

void nf_dup_ipv4(struct net *net, struct sk_buff *skb, unsigned int hooknum,
		 const struct in_addr *gw, int oif);

#endif /* _NF_DUP_IPV4_H_ */

```

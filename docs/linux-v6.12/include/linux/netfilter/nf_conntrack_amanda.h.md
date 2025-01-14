---
sidebar_position: 4
---
# nf_conntrack_amanda.h

### ファイル情報

- パス: `linux-v6.12/include/linux/netfilter/nf_conntrack_amanda.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _NF_CONNTRACK_AMANDA_H
#define _NF_CONNTRACK_AMANDA_H
/* AMANDA tracking. */

#include <linux/netfilter.h>
#include <linux/skbuff.h>
#include <net/netfilter/nf_conntrack_expect.h>

extern unsigned int (*nf_nat_amanda_hook)(struct sk_buff *skb,
					  enum ip_conntrack_info ctinfo,
					  unsigned int protoff,
					  unsigned int matchoff,
					  unsigned int matchlen,
					  struct nf_conntrack_expect *exp);
#endif /* _NF_CONNTRACK_AMANDA_H */

```

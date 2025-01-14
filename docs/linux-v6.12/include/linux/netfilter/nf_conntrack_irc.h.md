---
sidebar_position: 11
---
# nf_conntrack_irc.h

### ファイル情報

- パス: `linux-v6.12/include/linux/netfilter/nf_conntrack_irc.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _NF_CONNTRACK_IRC_H
#define _NF_CONNTRACK_IRC_H

#include <linux/netfilter.h>
#include <linux/skbuff.h>
#include <net/netfilter/nf_conntrack_expect.h>

#define IRC_PORT	6667

extern unsigned int (*nf_nat_irc_hook)(struct sk_buff *skb,
				       enum ip_conntrack_info ctinfo,
				       unsigned int protoff,
				       unsigned int matchoff,
				       unsigned int matchlen,
				       struct nf_conntrack_expect *exp);

#endif /* _NF_CONNTRACK_IRC_H */

```

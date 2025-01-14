---
sidebar_position: 17
---
# nf_conntrack_snmp.h

### ファイル情報

- パス: `linux-v6.12/include/linux/netfilter/nf_conntrack_snmp.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _NF_CONNTRACK_SNMP_H
#define _NF_CONNTRACK_SNMP_H

#include <linux/netfilter.h>
#include <linux/skbuff.h>

extern int (*nf_nat_snmp_hook)(struct sk_buff *skb,
				unsigned int protoff,
				struct nf_conn *ct,
				enum ip_conntrack_info ctinfo);

#endif /* _NF_CONNTRACK_SNMP_H */

```

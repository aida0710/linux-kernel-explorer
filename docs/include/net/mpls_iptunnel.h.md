---
sidebar_position: 130
---
# mpls_iptunnel.h

### ファイル情報

- パス: `include/net/mpls_iptunnel.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * Copyright (c) 2015 Cumulus Networks, Inc.
 */

#ifndef _NET_MPLS_IPTUNNEL_H
#define _NET_MPLS_IPTUNNEL_H 1

#include <linux/types.h>
#include <net/lwtunnel.h>

struct mpls_iptunnel_encap {
	u8	labels;
	u8	ttl_propagate;
	u8	default_ttl;
	u8	reserved1;
	u32	label[];
};

static inline struct mpls_iptunnel_encap *mpls_lwtunnel_encap(struct lwtunnel_state *lwtstate)
{
	return (struct mpls_iptunnel_encap *)lwtstate->data;
}

#endif

```

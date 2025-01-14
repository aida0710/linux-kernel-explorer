---
sidebar_position: 8
---
# ieee802154_6lowpan.h

### ファイル情報

- パス: `linux-v6.12/include/net/netns/ieee802154_6lowpan.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * ieee802154 6lowpan in net namespaces
 */

#include <net/inet_frag.h>

#ifndef __NETNS_IEEE802154_6LOWPAN_H__
#define __NETNS_IEEE802154_6LOWPAN_H__

struct netns_sysctl_lowpan {
#ifdef CONFIG_SYSCTL
	struct ctl_table_header *frags_hdr;
#endif
};

struct netns_ieee802154_lowpan {
	struct netns_sysctl_lowpan sysctl;
	struct fqdir		*fqdir;
};

#endif

```

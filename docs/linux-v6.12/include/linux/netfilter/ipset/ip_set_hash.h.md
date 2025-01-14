---
sidebar_position: 4
---
# ip_set_hash.h

### ファイル情報

- パス: `linux-v6.12/include/linux/netfilter/ipset/ip_set_hash.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __IP_SET_HASH_H
#define __IP_SET_HASH_H

#include <uapi/linux/netfilter/ipset/ip_set_hash.h>


#define IPSET_DEFAULT_HASHSIZE		1024
#define IPSET_MIMINAL_HASHSIZE		64
#define IPSET_DEFAULT_MAXELEM		65536
#define IPSET_DEFAULT_PROBES		4
#define IPSET_DEFAULT_RESIZE		100

#endif /* __IP_SET_HASH_H */

```

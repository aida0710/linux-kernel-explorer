---
sidebar_position: 27
---
# nf_hooks_lwtunnel.h

### ファイル情報

- パス: `linux-v6.12/include/net/netfilter/nf_hooks_lwtunnel.h`

### コンテンツ

```h
#include <linux/sysctl.h>
#include <linux/types.h>

#ifdef CONFIG_SYSCTL
int nf_hooks_lwtunnel_sysctl_handler(const struct ctl_table *table, int write,
				     void *buffer, size_t *lenp, loff_t *ppos);
#endif

```

---
sidebar_position: 109
---
# xfrm4_state.c

### ファイル情報

- パス: `net/ipv4/xfrm4_state.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/*
 * xfrm4_state.c
 *
 * Changes:
 * 	YOSHIFUJI Hideaki @USAGI
 * 		Split up af-specific portion
 *
 */

#include <net/xfrm.h>

static struct xfrm_state_afinfo xfrm4_state_afinfo = {
	.family			= AF_INET,
	.proto			= IPPROTO_IPIP,
	.output			= xfrm4_output,
	.transport_finish	= xfrm4_transport_finish,
	.local_error		= xfrm4_local_error,
};

void __init xfrm4_state_init(void)
{
	xfrm_state_register_afinfo(&xfrm4_state_afinfo);
}

```

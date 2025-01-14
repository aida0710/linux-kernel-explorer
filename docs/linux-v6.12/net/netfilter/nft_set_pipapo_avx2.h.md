---
sidebar_position: 58
---
# nft_set_pipapo_avx2.h

### ファイル情報

- パス: `linux-v6.12/net/netfilter/nft_set_pipapo_avx2.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
#ifndef _NFT_SET_PIPAPO_AVX2_H

#if defined(CONFIG_X86_64) && !defined(CONFIG_UML)
#include <asm/fpu/xstate.h>
#define NFT_PIPAPO_ALIGN	(XSAVE_YMM_SIZE / BITS_PER_BYTE)

bool nft_pipapo_avx2_estimate(const struct nft_set_desc *desc, u32 features,
			      struct nft_set_estimate *est);
#endif /* defined(CONFIG_X86_64) && !defined(CONFIG_UML) */

#endif /* _NFT_SET_PIPAPO_AVX2_H */

```

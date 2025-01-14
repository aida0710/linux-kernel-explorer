---
sidebar_position: 124
---
# purgatory.h

### ファイル情報

- パス: `linux-v6.12/arch/s390/include/asm/purgatory.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * Copyright IBM Corp. 2018
 *
 * Author(s): Philipp Rudo <prudo@linux.vnet.ibm.com>
 */

#ifndef _S390_PURGATORY_H_
#define _S390_PURGATORY_H_
#ifndef __ASSEMBLY__

#include <linux/purgatory.h>

int verify_sha256_digest(void);

#endif	/* __ASSEMBLY__ */
#endif /* _S390_PURGATORY_H_ */

```

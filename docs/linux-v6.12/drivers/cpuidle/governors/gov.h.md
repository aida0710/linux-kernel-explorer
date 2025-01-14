---
sidebar_position: 1
---
# gov.h

### ファイル情報

- パス: `linux-v6.12/drivers/cpuidle/governors/gov.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */

/* Common definitions for cpuidle governors. */

#ifndef __CPUIDLE_GOVERNOR_H
#define __CPUIDLE_GOVERNOR_H

/*
 * Idle state target residency threshold used for deciding whether or not to
 * check the time till the closest expected timer event.
 */
#define RESIDENCY_THRESHOLD_NS	(15 * NSEC_PER_USEC)

#endif /* __CPUIDLE_GOVERNOR_H */

```

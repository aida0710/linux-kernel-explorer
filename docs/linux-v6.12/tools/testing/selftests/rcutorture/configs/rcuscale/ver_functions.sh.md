---
sidebar_position: 8
---
# ver_functions.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/rcutorture/configs/rcuscale/ver_functions.sh`

### コンテンツ

```sh
#!/bin/bash
# SPDX-License-Identifier: GPL-2.0+
#
# Torture-suite-dependent shell functions for the rest of the scripts.
#
# Copyright (C) IBM Corporation, 2015
#
# Authors: Paul E. McKenney <paulmck@linux.ibm.com>

# per_version_boot_params bootparam-string config-file seconds
#
# Adds per-version torture-module parameters to kernels supporting them.
per_version_boot_params () {
	echo	rcuscale.shutdown=1 \
		rcuscale.verbose=0 \
		$1
}

```

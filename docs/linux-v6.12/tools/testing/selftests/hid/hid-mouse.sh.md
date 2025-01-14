---
sidebar_position: 10
---
# hid-mouse.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/hid/hid-mouse.sh`

### コンテンツ

```sh
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0
# Runs tests for the HID subsystem

export TARGET=test_mouse.py

bash ./run-hid-tools-tests.sh

```

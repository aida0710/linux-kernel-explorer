---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `net/mac80211/tests/Makefile`

### コンテンツ

```txt
mac80211-tests-y += module.o elems.o mfp.o tpe.o

obj-$(CONFIG_MAC80211_KUNIT_TEST) += mac80211-tests.o

```

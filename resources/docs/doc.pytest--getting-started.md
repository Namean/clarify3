{
	"title": "Get Started — pytest documentation",
	"url": "https://docs.pytest.org/en/7.1.x/getting-started.html#getstarted",
	"author": "",
	"publisher": "",
	"isMedia": false,
	"postDate": "",
	"codeSnippetsArray": [],
	prerequisites: ["pytest requires: Python 3.7+ or PyPy3.", "pip - earliest version compatible with python 3.7.0"],
	installation: ["pip install -U pytest"]
}


# Get Started — pytest documentation


### Install pytest

1. run the following command in your command line:

```sh
pip install -U pytest
```

2. Check that you installed the correct version:

```shell
pytest --version
```

### Create your first test

Create a file called test_sample.py, containing a function, and a test:


```python
# content of test_sample.py

def func(x):
	return x + 1

def test_answer():
	assert func(3) == 5
```

The test

```
$ pytest
=========================== test session starts ============================
platform linux -- Python 3.x.y, pytest-7.x.y, pluggy-1.x.y
rootdir: /home/sweet/project
collected 1 item

test_sample.py F                                                     [100%]

================================= FAILURES =================================
_______________________________ test_answer ________________________________

    def test_answer():
>       assert func(3) == 5
E       assert 4 == 5
E        +  where 4 = func(3)

test_sample.py:6: AssertionError
========================= short test summary info ==========================
FAILED test_sample.py::test_answer - assert 4 == 5
============================ 1 failed in 0.12s =============================
```

The [100%] refers to the overall progress of running all test cases. After it finishes, pytest then shows a failure report because func(3) does not return 5.


#### Note:

You can use the assert statement to verify test expectations. pytest's Advanced assertion introspection will inteligently report intermediate values of the assert expression so you can avoid the many names of JUnit legacy methods.


### Run multiple tests

pytest will run all files of the form test _*.py or *_test.py in the current directory and its subdirectories. More generally, it follows standard test discovery rules.
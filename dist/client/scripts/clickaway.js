'use strict';

angular.module('yo-clickaway').directive('yoClickaway', ['$document', function ($document) {
	var body, doc, lastElementClicked, link;
	doc = $document[0];
	body = angular.element(doc.body);
	lastElementClicked = null;
	link = function link(scope, iElement, iAttrs) {
		var clickEventHandler, x;
		//fire click away only when not clicked on same element
		iElement.on('click', function (e) {
			var clickAwayCallback, lastElementClickedScope, ref, sameElementTriggered;
			sameElementTriggered = iElement === lastElementClicked;
			if (lastElementClicked && !sameElementTriggered) {
				lastElementClickedScope = angular.element(lastElementClicked).scope();
				clickAwayCallback = (ref = lastElementClicked[0]) != null ? ref.getAttribute("app-clickaway") : void 0;
				if (lastElementClickedScope) {
					lastElementClickedScope.$eval(clickAwayCallback);
				}
			}
			lastElementClicked = iElement;
			return e.stopPropagation();
		});
		clickEventHandler = function clickEventHandler() {
			var clickAwayCallback;
			clickAwayCallback = iAttrs.appClickaway;
			scope.$eval(clickAwayCallback);
		};

		//attach click handler on body		
		body.on('click', clickEventHandler);
		x = scope.$on('$destroy', function () {
			body.off('click', clickEventHandler);
			iElement.off('click');
			return x();
		});
	};
	return {
		link: link,
		restrict: 'A'
	};
}]);